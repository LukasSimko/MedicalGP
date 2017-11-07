var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;

chai.use(chaiHttp);
var _ = require('lodash' );

describe('patients', function (){
    describe('GET /patients', function () {
        it('should return all the Patients in Collection', function(done) {
            chai.request(server)
                .get('/patients')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(59);
                    done();
                });
        });
    });
    describe('GET /patients', function () {
        it('should return the Patients in Collection', function(done) {
            chai.request(server)
                .get('/patients/59fe0bcb9b8b7c1974632ad9')
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
                first: 'Renata',
                last: 'Simkova',
                age: 45,
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
                .put('/patients/59ff7e0d2871a30de8d2ef18/visit')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('Patient visit update');
                   done();
                });
        });


    });

});