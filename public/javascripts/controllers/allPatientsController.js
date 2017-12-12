var app = angular.module('DonationWebApp');


app.controller('allPatientsController', ['$scope',  '$http', function($scope,  $http) {
    // create a message to display in our view
    $scope.message = 'List of registered Patients!';



    findAll();

    function findAll() {
        $http.get('/patients')
            .success(function (data) {
                $scope.patients = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    $scope.delete = function(id) {
        if (confirm("Are you sure you want to delete this Patient?")) {
            console.log('Deleting patient  : ' + id);
            $http.delete('/patients/' + id)
                .success(function(data) {
                    console.log(data);
                    findAll();
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }
    };




}]);