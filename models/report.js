const mongoose = require('../config/mongoose');

const ReportSchema = new mongoose.create({
    status: {
        type: String,
        enum: [Negative, Travelled - Quarantine, Symptoms - Quarantine, Positive - Admit]
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },
    date: {
        type: Date
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    }
});

const Report = mongoose.model('Report', ReportSchema);

module.exports = Report;