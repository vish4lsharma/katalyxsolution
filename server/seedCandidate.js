const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const Candidate = require('./models/Candidate');

dotenv.config();

const seedCandidate = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/katalyx';
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB Connected for Seeding Candidate');

        // Delete existing test candidate
        await Candidate.deleteOne({ email: 'candidate@test.com' });
        console.log('Cleared existing test candidate');

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('password123', salt);

        const newCandidate = new Candidate({
            name: 'Test Candidate',
            email: 'candidate@test.com',
            password: hashedPassword,
            phone: '1234567890',
        });

        await newCandidate.save();
        console.log('Test Candidate Created: candidate@test.com / password123');

        process.exit();
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

seedCandidate();
