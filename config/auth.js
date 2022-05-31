const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctor');

exports.checkAuth = async (req,res,next)=>{

    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1];
        console.log(token)
    }

    if(!token){
        console.log("Token Error");
        return res.status(401).json({
            success: false,
            message: "Unauthorized access"
        });
    }

    try{
        const decryptedToken = jwt.verify(token,'hospital');
        console.log(decryptedToken);

        req.doctor = await Doctor.findById(decryptedToken.id);
        next();
    }
    catch(err){
        console.log(err);
        return res.status(401).json({
            success: false,
            message: "Unauthorized access"
        });
    }
}