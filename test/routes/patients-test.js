var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;
var Patient = require ('../../models/patients');

chai.use(chaiHttp);
var _ = require('lodash' );


describe('Patient', function (){
    beforeEach(function (done) {

        Patient.remove({}, function (err) {

            if (err)
                done(err);
            else {
                var patient1 = new Patient();

                patient1._id = "59f6f0b99bd9dc7f544d7dac";
                patient1.first = "Adam";
                patient1.last = "Smith";
                patient1.age = 24;
                patient1.gender = "female";
                patient1.mobile = 353876278131;
                patient1.visit = 0;



                patient1.save(function (err) {
                    if (err)
                        console.log(err);
                    else {
                        var patient2 = new Patient();

                        patient2._id = "59f6f0b99bd9dc7f555a7dac";
                        patient2.first = "Renata";
                        patient2.last = "Simkova";
                        patient2.age = 45;
                        patient2.gender = "female";
                        patient2.mobile = 353876278131;
                        patient2.visit = 0;

                        patient2.save(function (err) {
                            if (err)
                                console.log(err);
                            else {
                                done();
                            }
                        });
                    }
                });
            }
        });
    });


    describe('GET /patients', function () {
        it('should return all the Patients in Collection', function(done) {
            chai.request(server)
                .get('/patients')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(2);

                    done();
                });
        });
    });
    describe('GET /patients/id', function () {
        it('should return the Patient in Collection', function(done) {
            chai.request(server)

                .get('/patients/59f6f0b99bd9dc7f544d7dac') //59f6f0b99bd9dc7f544d7dac
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(1);
                    done();
                });
        });
    });
    describe('POST /patients', function () {
        it('should return confirmation message and update patients datastore', function(done) {
            var patients = {
                first: 'Eve',
                last: 'Smith',
                age: 24,
                gender: 'female',
                mobile: 353876278131,
                visit:0
            };
            chai.request(server)
                .post('/patients')
                .send(patients)
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('Patient have been added') ;
                    done();
                });
        });
    });

    describe('PUT /patients/:id/visit', function () {
        it('should return all Patients with specified patient update visit by 1', function(done) {
            chai.request(server)
                .put('/patients/59f6f0b99bd9dc7f544d7dac/visit')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('Patient visit update');
                    done();
                });
        });


    });

    describe(' /DELETE/patients/:id', function ()  {
        it('should delete a object from patients database with given id', function(done) {
                 chai.request(server)
                .delete('/patients/59f6f0b99bd9dc7f555a7dac')
                .end(function(err, res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
            // expect(res.body).to.have.property('message').equal('patient deleted')
                    expect(res.body.length).to.equal(1);
                });
            done();
        });
    });
});