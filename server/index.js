const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config({ path: path.join(__dirname, '../.env') }); // Also try root .env


const app = express();

// Middleware
app.use(cors({
    origin: ['https://katalyx.vercel.app', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.options('*', cors()); // Enable pre-flight for all routes
app.use(express.json());

// Static folder for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/applications', require('./routes/applications'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/candidate', require('./routes/candidate'));
app.use('/api/subscribe', require('./routes/subscribers'));

// Diagnostics for Vercel
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        env: process.env.NODE_ENV,
        hasMongo: !!process.env.MONGO_URI,
        hasJwt: !!process.env.JWT_SECRET
    });
});

// Middleware to ensure DB connection
app.use(async (req, res, next) => {
    if (!process.env.MONGO_URI) {
        console.error('CRITICAL: MONGO_URI is missing');
        // If it's a pre-flight OPTIONS request, we should still allow it to pass CORS
        if (req.method === 'OPTIONS') return next();
        return res.status(500).json({ error: 'Database configuration missing' });
    }

    try {
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 5000
            });
            console.log('MongoDB Connected');
        }
        next();
    } catch (err) {
        console.error('Database connection error:', err);
        if (req.method === 'OPTIONS') return next();
        res.status(500).json({ error: 'Database connection failed' });
    }
});

// For local development
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

// Export for Vercel serverless
module.exports = app;
