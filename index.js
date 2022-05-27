const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
// mongodb
const db = require('./config/mongoose');

// using routes
app.use('/',require('./routes'));


// app listening
app.listen(port, (err)=>{
    if(err){
        console.log("Error",err);
    }
    console.log("App is running on port",port);
})