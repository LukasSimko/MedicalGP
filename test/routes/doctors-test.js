var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;

chai.use(chaiHttp);
var _ = require('lodash' );

mongoose.connect('mongodb://localhost:27017/medicalgp');

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error', err);
});
db.once('open', function () {
    console.log('Successfully connected to database');
});


describe('doctor', function (){
    describe('GET /doctor', function () {
        it('should return all the Doctors in Collection', function(done) {
            chai.request(server)
                .get('/doctor')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(6);
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
            var patients = {
                fname: 'Peter',
                sname: 'Smith',
                location: 'Cork',
                contact: 353516278131,
                cost:50
            };
            chai.request(server)
                .post('/doctor')
                .send(patients)
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('New Doctor Added in system') ;
                    done();
                });
        });
    });

    describe(' /DELETE/doctor/:id', function ()  {
        it('should delete a object from patients database with given id', function(done) {
            beforeEach(function(){
                while(doctor.length > 0) {
                    doctor.pop();
                }
                doctor.push(
                    {id: '59fe476a533c0e24a08f8e67', fname: 'Lukas',sname: 'Simko', location:'Clonmel', contact: 35367544446, cost: 60}
                );

            });
            chai.request(server)
                .delete('/doctor/59fe476a533c0e24a08f8e67')
                .end(function(err, res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(1);
                });
            done();
        });
    });

});