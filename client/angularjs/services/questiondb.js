angular.module('quizApp')

.service('trivia', function($http, $window) {
   
      $http.get('https://opentdb.com/api.php?amount=10', {
      
      })
      .then(function({data}) {
        if (callback) {
          console.log(data.items);
        }
      })
      .catch(function({data}) {
        data.error.errors.forEach(function(err) {
          console.error(err.message);
        });
      });
    });
 
  