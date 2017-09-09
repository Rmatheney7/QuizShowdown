angular.module('app')

.service('trivia', function($http, $window) {
    this.search = function(query, callback) {
      $http.get('https://opentdb.com/api.php?amount=10', {
      
      })
      .then(function({data}) {
        if (callback) {
          callback(data.items);
        }
      })
      .catch(function({data}) {
        data.error.errors.forEach(function(err) {
          console.error(err.message);
        });
      });
    };
  });
  