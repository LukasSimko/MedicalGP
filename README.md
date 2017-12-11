# Assignment 1 - API testing and Source Control.

Name: Lukas Simko

## Overview.

This application should be use for patients as well as for new patients for schedule appoitment with doctors online. In this section
I develop back-end server with some functionality (ADD, DELETE, UPDATE, SEARCH) with implement MongoDB for 2 models (Doctors, Patients) as well as each step is commit in git repository.

## API endpoints.

Get('/patients',patients.searchAll);
Get('/patients/:id',patients.searchPatient);
Post('/patients',patients.addPatient);
Put('/patients/:id/visit',patients.updateVisit);
Delete('/patients/:id',patients.deletePatient);

Get('/doctor',doctor.searchAll);
Get('/doctor/:fname', doctor.findOneByName);
Post('/doctor', doctor.addDoctor);
Put('/doctor/:id/cost', doctor.updateCost);
Delete('/doctor/:id', doctor.deleteDoctor);



## Data storage.

PatientSchema = new mongoose.Schema({

    first: String,
    last: String,
    age: Number,
    gender: String,
    mobile: Number,
    visit:{type:Number,default:0}
});

DoctorSchema = new mongoose.Schema({
    fname: String,
    sname: String,
    location: String,
    contact: Number,
    cost: {type: Number, default:50}
});


## Sample Test execution.

PATIENTS TESTING

GET /patients 200 10.489 ms - 269
      ? should return all the Patients in Collection
    GET /patients/id
GET /patients/59f6f0b99bd9dc7f544d7dac 200 2.566 ms - 133
      ? should return the Patient in Collection
    POST /patients
Patient added:{"mobile":353876278131,"gender":"female","age":24,"last":"Smith","first":"Eve"
,"_id":"5a01ce692ffdf63a244833fb","visit":0}
POST /patients 200 14.127 ms - 37
      ? should return confirmation message and update patients datastore
    PUT /patients/:id/visit
PUT /patients/59f6f0b99bd9dc7f544d7dac/visit 200 4.600 ms - 34
      ? should return all Patients with specified patient update visit by 1
     /DELETE/patients/:id
      ? should delete a object from patients database with given id


  5 passing (129ms)

DOCTORS TESTING

GET /doctor 200 11.060 ms - 262
      ? should return all the Doctors in Collection
    GET /doctor/fname
GET /doctor/Renata 200 3.259 ms - 133
      ? should return the Doctor in Collection
    POST /doctor
Adding Doctors details: {"contact":353516278131,"location":"Cork","sname":"Smith","fname":"P
eter","_id":"5a01c8fa96c1f722d0297a1b","cost":50}
POST /doctor 200 15.058 ms - 40
      ? should return confirmation message and update Doctor datastore
    PUT /doctor/:id/cost
PUT /doctor/59f6f0b99bd9dc7f555a7dac/cost 200 6.543 ms - 38
      ? should return all Doctors with specified doctor update visit by 1
     /DELETE/doctor/:id
      ? should delete a object from doctor database with given id


  5 passing (125ms)



