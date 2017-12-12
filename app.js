var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var patients = require('./routes/patients');
var doctor = require('./routes/doctors');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));
app.use("/public", express.static(__dirname + "/public"));  // NEW

app.use('/', index);
app.use('/users', users);

app.get('/patients',patients.searchAll);
app.get('/patients/:id',patients.searchPatient);
app.post('/patients', patients.addPatient);
app.put('/patients/:id/visit',patients.updateVisit);
app.delete('/patients/:id',patients.deletePatient);

app.get('/doctor',doctor.searchAll);
app.get('/doctor/:fname', doctor.findOneByName);
app.post('/doctor', doctor.addDoctor);
app.put('/doctor/:id/cost', doctor.updateCost);
app.delete('/doctor/:id', doctor.deleteDoctor);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});



module.exports = app;