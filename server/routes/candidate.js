const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Candidate = require('../models/Candidate');
const Application = require('../models/Application');
const auth = require('../middleware/auth');

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
        console.log('=== Dashboard Request ===');
        console.log('Full req.user:', JSON.stringify(req.user, null, 2));

        // The auth middleware sets req.user to the decoded token
        // The token payload has { user: { id, role } }
        const userId = req.user.user?.id || req.user.id;

        console.log('Extracted userId:', userId);

        if (!userId) {
            console.log('ERROR: No userId found in token');
            return res.status(400).json({ message: 'Invalid user data in token' });
        }

        console.log('Searching for candidate with ID:', userId);
        const candidate = await Candidate.findById(userId).select('-password');

        console.log('Candidate found:', candidate ? 'Yes' : 'No');

        if (!candidate) {
            console.log('ERROR: Candidate not found in database');
            return res.status(404).json({ message: 'Candidate not found' });
        }

        console.log('Searching for applications with email:', candidate.email);
        // Find applications linked to this candidate
        const applications = await Application.find({ email: candidate.email }).populate('jobId');

        console.log('Applications found:', applications.length);

        res.json({ candidate, applications });
    } catch (err) {
        console.error('=== Dashboard Error ===');
        console.error('Error message:', err.message);
        console.error('Error stack:', err.stack);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
});

module.exports = router;
