const Report = require('../models/report');


module.exports.filterReports = async (req, res)=>{
try{
    if(req.params.status!=='Negative'&& req.params.status!=='Travelled - Quarantine' && req.params.status!=='Symptoms - Quarantine' && req.params.status!=='Positive - Admit'){
        
        return res.status(400).json({
            message:"Enter correct status code",
            status:"Should be from 'Negative', 'Travelled - Quarantine', 'Symptoms - Quarantine', 'Positive - Admit'"
        })
    }
    var reports = await Report.find({status:req.params.status}).populate('patient').populate('doctor');
    console.log(reports);

    var filteredReports = {};
    filteredReports.casesCount = reports.length;
    let report = [];

    for(let i=0; i<reports.length; i++){
        let patient = {};
        patient.name = reports[i].patient.name;
        patient.phone = reports[i].patient.phone_no;
        patient.date = reports[i].createdAt,
        report.push({
            doctor: reports[i].doctor.name,
            patient:patient
        });
    }
    filteredReports.matchedReport = report;

    // Return response
    return res.status(200).json({
        success: true,
        body: filteredReports,
        msg:'All reports with the status!'
      });
}
catch(err){
    console.log(err)
     // Error handling
     return res.status(400).json({
        success: false,
        msg:'Error Occoured!'
      });
}
}