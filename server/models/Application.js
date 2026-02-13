const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    resumeAccesor: { type: String, required: true }, // Path to file or URL
    status: { type: String, enum: ['Pending', 'Reviewed', 'Interviewing', 'Rejected', 'Hired'], default: 'Pending' },
    appliedAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Application', ApplicationSchema);
