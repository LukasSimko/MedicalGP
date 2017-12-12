function patientController($scope, $http, $location) {
    // create a message to display in our view
    $scope.message = 'Please Enter the patients details';

    $scope.rgstPatient = function(regData){
        console.log("form submitted");
        $http.post('/patients', regData).success(function(data) {
            $scope.patients = data;
            $location.path('/')
            console.log(data);
        })
            .error(function(data) {
                console.log('Error: ' + data);
            });

    };
}
module.exports = patientController;
