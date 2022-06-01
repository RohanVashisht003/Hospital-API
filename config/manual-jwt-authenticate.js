const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken');

checkAuthentication = async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }

    if(!token){
        console.log("Token not found/TokenError");
        return res.status(401).json({
            success: false,
            message: "You are not authorized"
        });
    }

    try{
        const decrypted = jwt.verify(token,'hospital');
        req.doctor = await Doctor.findById(decrypted._id);
        // console.log(req.doctor)
        next();
    }
    catch(err){
        console.log(err);
        return res.status(401).json({
          success: false,
          message: "Unauthroized access"
        });
    }
}

module.exports = checkAuthentication;