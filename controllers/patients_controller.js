const Doctor = require('../models/doctor');
const Patient = require('../models/patient');
const Report = require('../models/report');

// register patient
module.exports.register = async (req, res)=>
{
    try{
        let patient = await Patient.findOne({phone_no:req.body.phone_no});

        if(patient){
            return res.status(200).json({
                message:"Patient Already Exists",
                patient:patient,
            })
        }

        let newPatient = await Patient.create(req.body);
        
        return res.status(201).json({
            message: "Patient registered successfully",
            newPatient:newPatient,
        })
    }
    catch(err){
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

// create patient report
module.exports.createReport = async (req, res)=>{
    try{
        let patientDetails = await Patient.findById({patient:req.params.id});

        let report = await Report.create({
            patient:req.params.id,
            doctor:req.doctor.id,
            status:req.body.status,
        });

        patientDetails.reports.push(report);
        patientDetails.save();

        return res.status(201).json({
            message: "Report Created",
            body: report,
            success: true
        });
    }
    catch(err){
        return res.status(400).json({
            success: false,
            message: 'Error occured'
        })
    }
}



