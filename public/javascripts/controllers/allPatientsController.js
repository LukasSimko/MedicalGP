var app = angular.module('DonationWebApp');


app.controller('allPatientsController', ['$scope',  '$http', function($scope,  $http) {
    // create a message to display in our view
    $scope.message = 'Current Patients!';}]);