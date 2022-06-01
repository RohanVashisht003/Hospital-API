const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


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
},
{
    timestamps: true
});


// Encrypt Password
doctorSchema.pre('save',async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})

// match password
doctorSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}
const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;