var mongoose = require('mongoose');


var PatientSchema = new mongoose.Schema({

    first: String,
    last: String,
    age: Number,
    gender: String,
    mobile: Number,
    visit:{type:Number,default:0}
});


module.exports = mongoose.model('Patient',PatientSchema);