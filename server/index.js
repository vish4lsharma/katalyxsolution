const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();

// Log basic info on startup
console.log('Server process started');
console.log('Environment:', process.env.NODE_ENV);

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

// 1. STANDARD CORS MIDDLEWARE
const allowedOrigins = [
    "https://katalyxsolutions.com"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("CORS not allowed"));
        }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.options("*", cors());

// 3. BODY PARSERS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4. HEALTH CHECK (No DB dependency)
app.get(['/health', '/api/health'], (req, res) => {
    res.status(200).json({
        status: 'online',
        time: new Date().toISOString(),
        config: {
            hasMongo: !!process.env.MONGO_URI,
            hasJWT: !!process.env.JWT_SECRET,
            nodeEnv: process.env.NODE_ENV
        }
    });
});

// 5. DATABASE CONNECTION UTILITY
const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;

    if (!process.env.MONGO_URI) {
        console.error('SERVER_CRASH: MONGO_URI is missing');
        // Don't throw a terminal error during boot, just log and handle in middleware
        return;
    }

    // Options for high reliability on Vercel
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
    });
    console.log('MongoDB Connected');
};

// 6. DB CONNECTION MIDDLEWARE
// Ensures every API request has a working DB connection
const dbConn = async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (err) {
        console.error('DB_CONN_FAILURE:', err.message);
        // Explicitly send headers here too just in case
        res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
        res.status(500).json({
            error: 'Backend Connection Error',
            message: 'Failed to connect to the database. Check your MONGO_URI.'
        });
    }
};

// 7. API ROUTES (Protected by DB middleware)
app.use('/api/auth', dbConn, require('./routes/auth'));
app.use('/api/jobs', dbConn, require('./routes/jobs'));
app.use('/api/applications', dbConn, require('./routes/applications'));
app.use('/api/contact', dbConn, require('./routes/contact'));
app.use('/api/candidate', dbConn, require('./routes/candidate'));
app.use('/api/subscribe', dbConn, require('./routes/subscribers'));

// 8. GLOBAL 404 & ERROR HANDLING
app.use((req, res) => {
    res.status(404).json({ error: 'Route Not Found', path: req.path });
});

app.use((err, req, res, next) => {
    console.error('UNHANDLED_ERROR:', err);
    res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

// 9. LOCAL LISTEN (Only if not on Vercel)
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

// Basic root route for verification
app.get('/', (req, res) => {
    res.json({
        message: 'Katalyx Backend Server is running',
        environment: process.env.NODE_ENV,
        endpoints: ['/api/health', '/api/auth', '/api/jobs']
    });
});

app.get('/api', (req, res) => {
    res.json({ message: 'Katalyx API Root' });
});

// Export for Vercel
module.exports = app;
