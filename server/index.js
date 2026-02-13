const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Initialize app
const app = express();

// Load env vars
dotenv.config();

// 1. GLOBAL CORS
// Allow both production and local development origins
const allowedOrigins = [
    'https://katalyx.vercel.app',
    'http://localhost:5173',
    'http://localhost:3000'
];

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            // During debugging, we can return true or log it
            // For now, let's be permissive and log
            console.log('Origin not in allowed list:', origin);
            return callback(null, true);
        }
        return callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
    credentials: true,
    optionsSuccessStatus: 200
}));

// Handle OPTIONS explicitly for any route
app.options('*', cors());

// 2. Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Health Check (Always accessible, no DB needed)
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        time: new Date().toISOString(),
        node: process.version,
        env: process.env.NODE_ENV,
        hasMongo: !!process.env.MONGO_URI ? 'Yes' : 'No'
    });
});

// 4. Database Connection Utility
const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;

    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
        console.error('CRITICAL: MONGO_URI is not defined');
        return; // Don't throw here, let the middleware handle it
    }

    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        });
        console.log('MongoDB Connected successfully');
    } catch (err) {
        console.error('MongoDB Initial Connection Error:', err.message);
    }
};

// 5. DB Middleware
const dbMiddleware = async (req, res, next) => {
    // Skip DB check for health and options
    if (req.path === '/health' || req.method === 'OPTIONS') return next();

    if (!process.env.MONGO_URI) {
        return res.status(500).json({
            error: 'Backend Configuration Error',
            message: 'MONGO_URI environment variable is missing in Vercel settings.'
        });
    }

    try {
        await connectDB();
        next();
    } catch (err) {
        console.error('DB Middleware Error:', err.message);
        res.status(500).json({ error: 'Database connection failed', message: err.message });
    }
};

// Apply DB middleware to all /api routes
app.use('/api', dbMiddleware);

// 6. Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/applications', require('./routes/applications'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/candidate', require('./routes/candidate'));
app.use('/api/subscribe', require('./routes/subscribers'));

// Static folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 7. Global 404
app.use((req, res) => {
    res.status(404).json({ error: 'Route Not Found', path: req.path });
});

// 8. Global Error Handler
app.use((err, req, res, next) => {
    console.error('Server Unhandled Error:', err);
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

module.exports = app;
