angular.module('myApp')

    .service('trivia', function ($http, $window) {
        this.search = function (type, callback) {
            $http.get("https://opentdb.com/api.php", {
                params: {
                    amount: type.amount || 10,
                    category: type.category || 9,
                    difficulty: type.difficulty || "hard",
                    type: 'multiple'
                }
            })
                .then(function ({ data }) {
                    if (callback) {
                        callback(data.results);
                    }
                })
                .catch(function ({ data }) {
                    data.error.errors.forEach(function (err) {
                        console.error(err.message);
                    });
                });
        };
    });
