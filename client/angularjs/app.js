var quizApp = angular.module('app', ['ngRoute']).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    // $routeProvider.when('/retry', {templateUrl: 'partials/retry.ejs', controller: 'homeController'});
    // $routeProvider.otherwise({redirectTo: '/signup'});

    // $locationProvider.html5Mode({enabled: true,requireBase: false});
}])