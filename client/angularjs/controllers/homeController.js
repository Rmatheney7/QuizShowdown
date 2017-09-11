
myApp.controller('homeController',['$scope', '$http', '$log', 'Question', function ($scope, $http, $log, Question) {
    $scope.solo = function () {
        console.log($scope.score);
    }

    $scope.score = 0;

    $scope.challenge = function () {
        $scope.score++;
        //console.log(5)
    }

    //$scope.questions = 5;


    $scope.create = function () {
            $http.get("https://opentdb.com/api.php", {
                params: {
                    amount: 12,
                    category: 18,
                    difficulty: "hard",
                    type: 'multiple'
                }
            })
                .then(function (response) {
                    $scope.questions = response.data.results
                    $scope.questions
                    // response('/quiz.ejs')
                    
                });
        

    };

$scope.test = $scope.create();
    

    $scope.shelf = [{
        'name': 'General Knowledge',
        'value': '9'
    }, {
        'name': 'Books',
        'value': '10'
    }, {
        'name': 'Films',
        'value': '11'
    }, {
        'name': 'Music',
        'value': '12'
    }, {
        'name': 'Musicals',
        'value': '13'
    }, {
        'name': 'Television',
        'value': '14'
    }, {
        'name': 'Video games',
        'value': '15'
    }, {
        'name': 'Board Games',
        'value': '16'
    }, {
        'name': 'Science and Nature',
        'value': '17'
    }, {
        'name': 'Computers',
        'value': '18'
    }, {
        'name': 'Mathematics',
        'value': '19'
    }, {
        'name': 'Mythology',
        'value': '20'
    }, {
        'name': 'Sports',
        'value': '21'
    }, {
        'name': 'Geography',
        'value': '22'
    }, {
        'name': 'History',
        'value': '23'
    }, {
        'name': 'Politics',
        'value': '24'
    }, {
        'name': 'Art',
        'value': '25'
    }, {
        'name': 'Celebrities',
        'value': '26'
    }, {
        'name': 'Animals',
        'value': '27'
    }, {
        'name': 'Music',
        'value': '28'
    }, {
        'name': 'Vehicles',
        'value': '29'
    }, {
        'name': 'Comics',
        'value': '30'
    }, {
        'name': 'Gadgets',
        'value': '31'
    }, {
        'name': 'Anime',
        'value': '32'
    }, {
        'name': 'Science and Nature',
        'value': '33'
    }, {
        'name': 'Cartoons',
        'value': '34'
    }
    ];

    $scope.cart = {
        'Topics': $scope.shelf[0]
        
    };

}])




