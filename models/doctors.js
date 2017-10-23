var mongoose = require('mongoose');

var DoctorSchema = new mongoose.Schema({
    fname: String,
    sname: String,
    location: String,
    contact: Number,
    cost: {type: Number, default:50}
});

module.exports = mongoose.model('Doctor', DoctorSchema);