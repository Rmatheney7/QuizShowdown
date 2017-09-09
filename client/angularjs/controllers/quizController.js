myApp.controller('quizController',['$scope', 'Api', function(){
    $scope.form ={};
    $scope.addToDatabase = function(){
        Api.Question.save({},$scope.form, function(){
            $scope.form = {};
        })
    }
}])