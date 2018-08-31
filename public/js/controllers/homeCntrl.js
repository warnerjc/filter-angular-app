// Define the HomeCntrl module and HomeController controller
angular.module('HomeCntrl', []).controller('HomeController', function($scope, $http) {
    
    $http.get('./json/departments.json')
        .then( res => {
            // this callback will be called asynchronously
            // when the response is available
            console.log(`departments \n${res.data}`)

            $scope.departments = res.data.departments;
        }, function errorCallback(err) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(`error: ${err}`);
        });

        $http.get('./json/students.json')
        .then( res => {
            // this callback will be called asynchronously
            // when the response is available
            console.log(`students \n${res.data}`)

            $scope.students = res.data.body.studentData.students;
        }, function errorCallback(err) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(`error: ${err}`);
        });

});