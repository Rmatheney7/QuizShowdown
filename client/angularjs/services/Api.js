myApp.factory("Question", [ "$resource", function($resource){
  return{
    Question:$resource('/question/:question', {question: '@'})
  }
}])