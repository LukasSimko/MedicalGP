var app = angular.module('DonationWebApp');


app.controller('mainController', ['$scope', function($scope) {
    // create a message to display in our view
    $scope.message = 'Welcome to the Medical GP Registration System';
}
]);