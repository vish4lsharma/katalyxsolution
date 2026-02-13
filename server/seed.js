const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

dotenv.config();

const seedAdmin = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/katalyx';
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB Connected for Seeding');

        const admins = [
            { email: 'admin@katalyx.com', password: 'admin123' },
            { email: 'info@abhiroom.in', password: 'Vishal@6398692585' }
        ];

        // Delete existing admins to ensure fresh credentials
        await User.deleteMany({ email: { $in: admins.map(a => a.email) } });
        console.log('Cleared existing admin users');

        for (const admin of admins) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(admin.password, salt);

            const newAdmin = new User({
                email: admin.email,
                password: hashedPassword,
                role: 'admin',
            });

            await newAdmin.save();
            console.log(`Admin User Created: ${admin.email}`);
        }

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedAdmin();
