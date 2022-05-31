const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
// using routes
app.use('/',require('./routes'));


// app listening
app.listen(port, (err)=>{
    if(err){
        console.log("Error",err);
    }
    console.log("App is running on port",port);
})