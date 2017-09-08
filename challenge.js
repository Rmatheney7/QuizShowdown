const mongoose = require('require');

var questionSchema = mongoose.Schema({
    category: String,
    type: String,
    difficulty: String,
    question: String,
    correct_answer: String,
    incorrect_answer: [String]

})

Question = mongoose.model('Question', questionSchema)