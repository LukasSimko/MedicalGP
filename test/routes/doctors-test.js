var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;

chai.use(chaiHttp);
var _ = require('lodash' );

describe('doctor', function (){
    describe('GET /doctor', function () {
        it('should return all the Doctors in Collection', function(done) {
            chai.request(server)
                .get('/doctor')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(3);
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





});