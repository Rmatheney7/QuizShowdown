angular.module('quizShowdown')

.controller('indexCtrl', function($scope, trivia) {

  this.returnQuestions = trivia;
  this.count = 0;
  this.query = {};
  
  
  this.quiz = (data) => {
    this.questions = data;
    this.question = data[this.count];
  };

  this.nextQuestion = (cb) => {
    if(this.questions.length > this.count){
      this.question = this.questions[this.count];
    } else {
      this.count = 0;
      cb();
    }
  };


  //this.trivia.search(this.query, this.quiz);
})


.component('app', {

  controller: 'indexCtrl',
  templateUrl: 'partials/index.html'
  });

