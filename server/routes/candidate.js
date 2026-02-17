const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const Candidate = require('../models/Candidate');
const Application = require('../models/Application');
const auth = require('../middleware/auth');

const getGoogleClient = () => {
    if (!process.env.VITE_GOOGLE_CLIENT_ID) {
        console.warn('VITE_GOOGLE_CLIENT_ID is missing');
        return null;
    }
    return new OAuth2Client(process.env.VITE_GOOGLE_CLIENT_ID);
};

// Google Login Candidate
router.post('/google-login', async (req, res) => {
    const { tokenId } = req.body;
    try {
        const client = getGoogleClient();
        if (!client) {
            return res.status(500).json({ msg: 'Google OAuth not configured' });
        }
        const ticket = await client.verifyIdToken({
            idToken: tokenId,
            audience: process.env.VITE_GOOGLE_CLIENT_ID,
        });
        const { name, email, picture, sub } = ticket.getPayload();

        let candidate = await Candidate.findOne({ email });

        if (!candidate) {
            candidate = new Candidate({
                name,
                email,
                password: await bcrypt.hash(sub + Math.random(), 10),
                phone: 'Not provided'
            });
            await candidate.save();
        }

        const payload = { user: { id: candidate.id, role: 'candidate' } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5d' }, (err, token) => {
            if (err) throw err;
            res.json({ token, user: { id: candidate.id, name: candidate.name, email: candidate.email, role: 'candidate', picture } });
        });
    } catch (err) {
        console.error('Google Login Error:', err.message);
        res.status(500).json({ msg: 'Google Authentication failed' });
    }
});

// Register Candidate
router.post('/register', async (req, res) => {
    const { name, email, password, phone } = req.body;
    try {
        let candidate = await Candidate.findOne({ email });
        if (candidate) return res.status(400).json({ msg: 'Candidate already exists' });

        candidate = new Candidate({ name, email, password, phone });
        const salt = await bcrypt.genSalt(10);
        candidate.password = await bcrypt.hash(password, salt);
        await candidate.save();

        const payload = { user: { id: candidate.id, role: 'candidate' } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5d' }, (err, token) => {
            if (err) throw err;
            res.json({ token, user: { id: candidate.id, name: candidate.name, email: candidate.email, role: 'candidate' } });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Login Candidate
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        let candidate = await Candidate.findOne({ email });
        if (!candidate) return res.status(400).json({ msg: 'Invalid Credentials' });

        const isMatch = await bcrypt.compare(password, candidate.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

        const payload = { user: { id: candidate.id, role: 'candidate' } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5d' }, (err, token) => {
            if (err) throw err;
            res.json({ token, user: { id: candidate.id, name: candidate.name, email: candidate.email, role: 'candidate' } });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Get Candidate Profile & Applications
router.get('/dashboard', auth, async (req, res) => {
    try {
        const userId = req.user.user?.id || req.user.id;
        if (!userId) return res.status(400).json({ message: 'Invalid user data in token' });

        const candidate = await Candidate.findById(userId).select('-password');
        if (!candidate) return res.status(404).json({ message: 'Candidate not found' });

        const applications = await Application.find({ email: candidate.email }).populate('jobId');
        res.json({ candidate, applications });
    } catch (err) {
        console.error('Dashboard Error:', err.message);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
});

module.exports = router;
