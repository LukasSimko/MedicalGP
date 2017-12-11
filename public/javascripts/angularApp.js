var app = angular.module('DonationWebApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.ejs',
            controller  : 'mainController'
        })

        .when('/patients',{
            templateUrl : 'pages/patient.ejs',
            controller  : 'patientController'
        })

        .when('/registered',{
            templateUrl : 'pages/allPatients.ejs',
            controller  : 'allPatientsController'
        })
        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.ejs',
            controller  : 'aboutController'
        })

        .when('/contact', {
            templateUrl : 'pages/contact.ejs',
            controller  : 'contactController'
        })


});

