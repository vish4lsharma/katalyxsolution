const express = require('express');
const router = express.Router();
const multer = require('multer');
const auth = require('../middleware/auth');
const Application = require('../models/Application');
const path = require('path');
const fs = require('fs');

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "application/pdf" || file.mimetype === "application/msword" || file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            cb(null, true);
        } else {
            cb(new Error("Only .pdf, .doc and .docx formats allowed!"));
        }
    }
});

// Apply for a job (Public) - Now accepts Google Drive link
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, jobId, resumeLink } = req.body;

        if (!resumeLink) {
            return res.status(400).json({ msg: 'Please provide a resume Google Drive link' });
        }

        // Validate that it's a Google Drive link
        if (!resumeLink.includes('drive.google.com')) {
            return res.status(400).json({ msg: 'Please provide a valid Google Drive link' });
        }

        const newApplication = new Application({
            name,
            email,
            phone,
            jobId,
            resumeAccesor: resumeLink, // Store the Google Drive link
        });

        const application = await newApplication.save();
        res.json(application);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Get all applications (Admin only)
router.get('/', auth, async (req, res) => {
    try {
        const applications = await Application.find().populate('jobId', 'title department').sort({ createdAt: -1 });
        res.json(applications);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
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
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
