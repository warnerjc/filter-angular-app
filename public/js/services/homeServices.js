// Define Home Service Module and Services
angular.module('HomeService', []).factory('Home', ['$http', function($http) {

    return {
        // call to get all departments
        getDepartments: function() {
            return $http.get('/app/json/departments.json');
        },

        getStudents: function() {
            return $http.get('/app/json/students.json');
        }
    }  

}]);