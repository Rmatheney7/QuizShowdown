var myApp = angular.module('myApp', ['ngRoute', "ngResource"]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.when('/', {templateUrl: 'partials/answerBox.ejs', controller: 'homeController'});
    $routeProvider.when('/leaderBoard', {templateUrl: 'partials/leaderBoard.ejs', controller: 'homeController'});
    $routeProvider.when('/stats', {templateUrl: 'partials/stats.ejs', controller: 'homeController'});
    $routeProvider.when('/login', {templateUrl: 'partials/stats.ejs', controller: 'homeController'});
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode({enabled: true,requireBase: false});


}])
