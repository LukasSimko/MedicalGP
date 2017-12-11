var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;
var Doctor = require ('../../models/doctors');

chai.use(chaiHttp);
var _ = require('lodash' );


describe('doctor', function (){
    beforeEach(function (done) {

        Doctor.remove({}, function (err) {

            if (err)
                done(err);
            else {
                var doctor1 = new Doctor();

                doctor1._id = "59f6f0b99bd9dc7f555a7dac";
                doctor1.fname = "Renata";
                doctor1.sname = "Simkova";
                doctor1.location = "Clonmel";
                doctor1.contact = 353625178131;
                doctor1.cost = 50;



                doctor1.save(function (err) {
                    if (err)
                        console.log(err);
                    else {
                        var doctor2 = new Doctor();

                        doctor2._id = "59f6f0b99bd0000f555a7dac";
                        doctor2.fname = "Peter";
                        doctor2.sname = "Korfanta";
                        doctor2.location = "Cork";
                        doctor2.contact = 353625178131;
                        doctor2.cost = 50;

                        doctor2.save(function (err) {
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
    describe('GET /doctor', function () {
        it('should return all the Doctors in Collection', function(done) {
            chai.request(server)
                .get('/doctor')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(2);
                    
                    done();
                });
        });
    });

    describe('GET /doctor/fname', function () {
        it('should return the Doctor in Collection', function(done) {
            chai.request(server)
                .get('/doctor/Renata')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(1);
                    done();
                });
        });
    });

    describe('POST /doctor', function () {
        it('should return confirmation message and update Doctor datastore', function(done) {
            var doctor = {
                fname: 'Peter',
                sname: 'Smith',
                location: 'Cork',
                contact: 353516278131,
                cost:50
            };
            chai.request(server)
                .post('/doctor')
                .send(doctor)
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('New Doctor Added in system') ;
                    done();
                });
        });
    });

    describe('PUT /doctor/:id/cost', function () {
        it('should return all Doctors with specified doctor update cost to 50', function(done) {
            chai.request(server)
                .put('/doctor/59f6f0b99bd9dc7f555a7dac/cost')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('Price per visit updated!');
                    done();
                });
        });


    });

   describe(' /DELETE/doctor/:id', function ()  {
        it('should delete a object from doctor database with given id', function(done) {
        
          chai.request(server)
             .delete('/doctor/59f6f0b99bd0000f555a7dac')
              .end(function(err, res){
                 expect(res).to.have.status(200);
                 expect(res.body).to.be.a('array');
                 expect(res.body.length).to.equal(1);
               });
            done();
        });
    });

});
