const mongoose = require('mongoose');
var Promise = require('bluebird');

var userSchema = mongoose.Schema({
    username: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true},
    showDowns: {type: Number, default: 0},
    totalQuestions: {type: Number, default: 0},
    questionsRight: {type: Number, default: 0},
    questionsWrong: {type: Number, defaults: 0} 
})

User = mongoose.model('User', userSchema)



module.exports = User;