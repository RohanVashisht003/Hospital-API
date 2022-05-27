const mongoose = require('../config/mongoose');

const patientSchema = new mongoose.create({
    name:{
        type: String,
        required : true
    },
    phone_no:{
        type: Number,
        required:true,
        unique: true,
    },
    reports:[
        {
            type: mongoose.Schema.Type.ObjectId,
            ref: "Report"
        }
    ]
},
{timestamps: true});

const Patient = mongoose.model('Patient',patientSchema);

module.exports = Patient;