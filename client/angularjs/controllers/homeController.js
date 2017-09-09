
myApp.controller('homeController', function ($scope, $http, $log) {

    $http.get("https://opentdb.com/api.php?", {
        params: {
            amount: 10,
            category: 15,
            difficulty: 'medium',
            type: 'multiple'
        }
    })
        .then(function (response) {

            $scope.data = response.data;
            let question = response.data.question;
            let category = response.data.category;
            let correct_answer = response.data.correct_answer;
            let incorrect_answer = response.data.incorrect_answer;
            let difficulty = response.data.difficulty;

            //console.log(response.data.results);

            response.data.results.forEach(function(element) {
                //create new questions 
                console.log(element.question)
                
            });
            
        })

            
          
           
});