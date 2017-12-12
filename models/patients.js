var mongoose = require('mongoose');


var PatientSchema = new mongoose.Schema({

    first: String,
    last: String,
    age: Number,
    gender: String,
    mobile: Number});


module.exports = mongoose.model('Patient',PatientSchema);