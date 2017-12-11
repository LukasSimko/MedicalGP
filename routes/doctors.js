var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Doctor = require('../models/doctors');



mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/medicalgp',{useMongoClient : true});

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error', err);
});
db.once('open', function () {
    console.log('Successfully connected to database');
});

// same as in patient find all

router.searchAll = function(req, res) {
    // Use the Doctor model to find all doctors
    Doctor.find(function(err, doctors) {

        if (err)
            res.send(err);
        else
            res.json(doctors);

    });
}
// finding all doctors by letter matching requirements in Path
router.findOneByName = function(req, res) {

// RegExp is mongosse class to compare if variable contains element
    Doctor.find({fname: new RegExp(req.params.fname, "i")},function(err, doctors) {
// if first name have no match (array empty) , then no doctor is not found.
        if (err || doctors<1)
            res.json({ message: 'Doctor NOT Found!'} );
        else
            res.json(doctors);
    });
}

//adding new doctor to doctorDB with relevant information

router.addDoctor = function(req, res) {

    var doctor = new Doctor();

    doctor.fname = req.body.fname;
    doctor.sname = req.body.sname;
    doctor.location = req.body.location;
    doctor.contact = req.body.contact;

    console.log('Adding Doctors details: ' + JSON.stringify(doctor));

    // Save the Doctor and check for errors
    doctor.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'New Doctor Added in system'});
    });
}

//update default cost for visit and replace it with new one entered
router.updateCost = function(req, res) {

    Doctor.findById(req.params.id, function(err,doctor) {
        if (err)
            res.send(err);
        else {
            doctor.cost = req.body.cost;//replace cost with new cost in request body
            doctor.save(function (err) {
                if (err)
                    res.send(err);
                else
                    res.json({ message: 'Price per visit updated!'});
            });
        }
    });
}

// delete doctor from database system by specific ID
router.deleteDoctor = function(req, res) {

    Doctor.findByIdAndRemove(req.params.id, function(err) {
        if (err)
            res.send(err);
        else
            res.json({ message: 'Doctor Deleted!'});
    });
}

module.exports = router;