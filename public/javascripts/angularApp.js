require('angular');
require('angular-route');
var app = angular.module('DonationWebApp', ['ngRoute']);
require('./controllers/index');
require('../../node_modules/bootstrap/dist/css/bootstrap.css' );
require('../../node_modules/font-awesome/css/font-awesome.css' );
require('../stylesheets/style.css');

app.config(['$routeProvider',function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'public/pages/home.ejs',
            controller  : 'mainController'
        })

        .when('/patients',{
            templateUrl : 'public/pages/patient.ejs',
            controller  : 'patientController'
        })

        .when('/registered',{
            templateUrl : 'public/pages/allPatients.ejs',
            controller  : 'allPatientsController'
        })
        // route for the about page
        .when('/about', {
            templateUrl : 'public/pages/about.ejs',
            controller  : 'aboutController'
        })

        .when('/contact', {
            templateUrl : 'public/pages/contact.ejs',
            controller  : 'contactController'
        })


}]);

