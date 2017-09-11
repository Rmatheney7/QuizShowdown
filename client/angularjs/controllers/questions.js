const mongoose = require('require');

var questionSchema = mongoose.Schema({
    category: String,
    difficulty: String,
    question: String,
    correct_answer: String,
    incorrect_answer: [String]

})

Questions = mongoose.model('Question', questionSchema)

module.exports =  Questions;