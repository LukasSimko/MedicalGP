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
                    expect(res.body.length).to.equal(4);
                    done();
                });
        });
    });
    describe('GET /patients', function () {
        it('should return the Patients in Collection', function(done) {
            chai.request(server)
                .get('/patients/59fb7aed01cb542e54ddc330')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(1);
                    done();
                });
        });
    });


});