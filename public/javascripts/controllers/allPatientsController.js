var app = angular.module('DonationWebApp');


app.controller('allPatientsController', ['$scope',  '$http', function($scope,  $http) {
    // create a message to display in our view
    $scope.message = 'List of Patients added!';



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

    $scope.current = {};

    $scope.update = function (patient) {
        console.log(patient._id);
        $scope.current = patient;
    };

    $scope.save = function () {
        console.log($scope.current._id);
        $http.put('patients/' + $scope.current._id + '/visit', $scope.current).success(function (data) {
            // $scope.donations = data;
            // $location.path('/donations')
            console.log(data);
            findAll()
            $scope.current = ""
        }).error(function (data) {
            console.log('Error: ' + data);
        });
    }


}]);