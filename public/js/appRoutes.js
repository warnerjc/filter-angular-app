// Filter Angular App Routes
angular.module('appRoutes', []).config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {

    $locationProvider.hashPrefix('!');

    $routeProvider

        // home page
        .when('/', {
            templateUrl: './views/home.html',
            controller: 'HomeController'
        })

        // filter drop down
        .when('/filter', {
            templateUrl: './views/filtered.html',
            controller: 'HomeController'
        });

    $locationProvider.html5Mode( {
        enabled: true,
        requireBase: false

    });

}]);