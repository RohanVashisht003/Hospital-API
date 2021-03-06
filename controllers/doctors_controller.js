const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken')


module.exports.signUp = async (req, res)=>{
   try{
    let doctor = await Doctor.findOne({email: req.body.email});
    if(doctor){
        return res.status(400).send({
            message: "Doctor already exists"
        });
    }
    let newDoctor = await Doctor.create(req.body);
        return res.status(201).json({
            message: "Doctor created successfully",
            newDoctor
        })
   }
   catch(err){
       console.log(err)
        return res.status(500).json({
            message: "Internal Server Error"
        })
   }
};


module.exports.createSession = async (req, res)=>{
    try{
        let doctor = await Doctor.findOne({email:req.body.email});
        let storedPassword = await doctor.comparePassword(req.body.password);
        if(!doctor || !storedPassword){
            return res.status(422).json({
                message: "Invalid username and password",
            });
        }
        
        let token = jwt.sign({_id:doctor._id},'hospital',{
            expiresIn: '5m'
        })

        return res.status(200).json({
            success: true,
            message: `Sign in successful ${doctor.name}`,
            token:token,
        });
    }
    catch(err){
        console.log('xxxxxxxxxx',err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};