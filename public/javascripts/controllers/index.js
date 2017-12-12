var app = angular.module('DonationWebApp');

app.controller('aboutController', ['$scope',require('./aboutcontroller')]);
app.controller('mainController',  ['$scope', require('./maincontroller')]);
app.controller('allPatientsController', ['$scope',require('./allPatientsController')]);
app.controller('patientController',['$scope',require('./patientcontroller')]);
app.controller('contactController', ['$scope',require('./contactcontroller')]);