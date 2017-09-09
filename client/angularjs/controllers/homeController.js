
myApp.controller('homeController', function ($scope, $http, $log) {
    $scope.solo = function(){
        console.log('solo');
    }

    $scope.challenge = function(){
        console.log('challenge accepted');
    }

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





    
          
           
});



// $http.get("https://opentdb.com/api.php?", {
//     params: {
//         amount: 10,
//         category: 15,
//         difficulty: 'medium',
//         type: 'multiple'
//     }
// })
//     .then(function (response) {

//         $scope.data = response.data;
//         let question = response.data.question;
//         let category = response.data.category;
//         let correct_answer = response.data.correct_answer;
//         let incorrect_answer = response.data.incorrect_answer;
//         let difficulty = response.data.difficulty;

//         //console.log(response.data.results);

//         response.data.results.forEach(function(element) {
//             //create new questions 
//             console.log(element);
           
            
//         });
        
//     })

        