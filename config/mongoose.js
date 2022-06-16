const mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb://localhost/hospital_db');


// acquire the connection to check if it is successful or not
const db = mongoose.connection;

// if error
db.on('error', console.error.bind(console, "Error in connecting to db"));

// if successfully working
db.once('open', () => {
    console.log("Successfully connected to db");
})


module.exports = db;
