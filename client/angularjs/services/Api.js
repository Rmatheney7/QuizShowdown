myApp.factory("Api", ["$resource", function($resource){
  return{
    Question:$resource('/question/:question', {question: '@'})
  }
}])