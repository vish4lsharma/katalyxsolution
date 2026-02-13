const express = require('express');
const router = express.Router();
const Application = require('../models/Application');
const auth = require('../middleware/auth');

// Apply for a job (Public) - Uses Google Drive link
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, jobId, resumeLink } = req.body;

        if (!resumeLink) {
            return res.status(400).json({ msg: 'Please provide your resume as a Google Drive link' });
        }

        // Basic validation for Google Drive link
        if (!resumeLink.includes('drive.google.com')) {
            return res.status(400).json({ msg: 'Please provide a valid Google Drive shareable link' });
        }

        const newApplication = new Application({
            name,
            email,
            phone,
            jobId,
            resumeAccesor: resumeLink,
        });

        const application = await newApplication.save();
        res.json(application);
    } catch (err) {
        console.error('Application submission error:', err.message);
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
});

// Get all applications (Admin only)
router.get('/', auth, async (req, res) => {
    try {
        const applications = await Application.find().populate('jobId', 'title department').sort({ createdAt: -1 });
        res.json(applications);
    } catch (err) {
        console.error('Error fetching applications:', err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// Update application status (Admin only)
router.patch('/:id/status', auth, async (req, res) => {
    try {
        const { status } = req.body;
        const application = await Application.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        res.json(application);
    } catch (err) {
        console.error('Error updating status:', err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
});

module.exports = router;
