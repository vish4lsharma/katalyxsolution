const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const app = express();

dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config({ path: path.join(__dirname, '../.env') });

// 1. Permissive CORS (MUST BE FIRST)
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

// Handle OPTIONS for all routes
app.options('*', cors());

// 2. Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Health Check
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        env: process.env.NODE_ENV,
        hasMongo: !!process.env.MONGO_URI,
        hasJwt: !!process.env.JWT_SECRET
    });
});

// 4. Database Connection Middleware
app.use(async (req, res, next) => {
    if (req.path === '/health' || req.method === 'OPTIONS') return next();

    if (!process.env.MONGO_URI) {
        console.error('CRITICAL: MONGO_URI is missing');
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
        res.status(500).json({ error: 'Database connection failed' });
    }
});

// 5. Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/applications', require('./routes/applications'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/candidate', require('./routes/candidate'));
app.use('/api/subscribe', require('./routes/subscribers'));

// Catch-all for routes missing /api/
app.use((req, res, next) => {
    if (!req.path.startsWith('/api/') && req.path !== '/health') {
        return res.status(404).json({
            error: 'Route not found',
            message: 'All API routes must start with /api/',
            receivedPath: req.path
        });
    }
    next();
});

// Static folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Local development
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

module.exports = app;
