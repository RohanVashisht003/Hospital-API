const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    status: {
        type: "String",
        enum: ["Negative", "Travelled - Quarantine", "Symptoms - Quarantine", "Positive - Admit"]
    },
    patient: {
        type: mongoose.Schema.ObjectId,
        ref: "Patient"
    },
    doctor: {
        type: mongoose.Schema.ObjectId,
        ref: "Doctor"
    }
},{timestamps:true});

const Report = mongoose.model('Report', ReportSchema);

module.exports = Report;