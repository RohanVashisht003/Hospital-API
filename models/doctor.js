const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');

const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true, 
    },
    email:{
        type: String,
        required:true,
        unique: true   
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

doctorSchema.methods.getJwtToken = function(){
    return jwt.sign({id: this._id},'hospital',{
        expiresIn: '100000'
    })
}
const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;