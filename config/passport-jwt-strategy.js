const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Doctor = require('../models/doctor');


let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'hospital'
};

console.log("Inside passport")
passport.use(
    new JWTStrategy(opts, function(jwtPayLoad, done){
         Doctor.findById(jwtPayLoad.id,(err,user)=>{
            if(err){
                console.log("Error in finding the doctor from JWT");
                return done(err,null);
            }
            if(user){
                return done(null, user);
            }
            else{
                return done(null, false);
            }
        });
    })
);

module.exports = passport;