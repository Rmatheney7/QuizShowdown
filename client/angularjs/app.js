var app = angular.module('app', ['ngRoute']).
config(['$routeProvider', '$locationProveider', function($routeProvider, $locatonProvider){
    $routeProvider.when('/retry', {templateUri: '/partials/retry.ejs', controller: '/controllers/homeController'});
    $routeProvider.otherwise({redirecTo: '/retry'});

    $locatonProvider.html5Mode({enabled: true,requireBase: false});
}])