const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ["Negative", "Travelled - Quarantine", "Symptoms - Quarantine", "Positive - Admit"]
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },
    date: {
        type: Date,
        default: Date.now
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    }
});

const Report = mongoose.model('Report', ReportSchema);

module.exports = Report;