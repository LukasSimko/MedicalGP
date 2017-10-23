var express = require('express');
var router = express.Router();
var Patient = require('../models/patients');


// find all patients
router.searchAll = function(req,res){
    Patient.find(function(err,patients){
        if(err)
            res.send(err);
        else
            res.json(patients);
    });
}

//find specific patients by ID
router.searchPatient = function(req,res) {

    Patient.find({"_id":req.params.id},function(err,patient){
        if(err)
            res.json({message : 'Patient not found in system'});
        else
            res.json(patient);
    });
}

//adding new patient to patientsDB with relevant information
router.addPatient = function(req,res) {

    var patient = new Patient();

    patient.first= req.body.first;
    patient.last= req.body.last;
    patient.age= req.body.age;
    patient.gender= req.body.gender;
    patient.mobile= req.body.mobile;

    console.log('Patient added:' + JSON.stringify(patient));

    patient.save(function(err){
        if(err)
            res.send(err);

        res.json({message:'Patient have been added'});
    });

}
// updating visit of patients by every visit by one
router.updateVisit = function(req,res) {

    Patient.findById(req.params.id,function(err,patient){
        if(err)
            res.send(err);
        else {
            patient.visit +=1;
            patient.save(function(err){
                if(err)
                    res.send(err);
                else
                    res.json({message:'Patient visit update',data:patient});
            });
        }

    });

}
// delete patient from database system by specific ID
router.deletePatient = function(req, res) {

    Patient.findByIdAndRemove(req.params.id,function(err){
        if(err)
            res.send(err);
        else
            res.json({message:'Patient deleted from database'});
    });
}



module.exports = router;