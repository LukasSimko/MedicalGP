var patients = require ('../models/patients');
var express = require('express');
var router = express.Router();

function getById(arr, id){

    var result = arr.filter(function(i){return i.id == id;});
    return result ? result [0] : null;
}

router.searchAll = function(req,res){
    res.json(patients);
}

router.searchPatient = function(req,res) {

    var patient = getById(patients, req.params.id);
    if (patient != null)
        res.json(patient);
    else
        res.json({message : 'Patient not found in system'});
}



module.exports = router;