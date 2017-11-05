var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;

chai.use(chaiHttp);
var _ = require('lodash' );

describe('doctor', function (){
    describe('GET /doctors', function () {
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
});