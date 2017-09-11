const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./dbConfig.js');
const User = require('./user.js');
const Promise = require('bluebird');
const path = require('path');

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views') )
app.use(express.static(path.resolve(__dirname, 'client')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

   // res.sendFile(__dirname + '/index.html')
   res.render('index.ejs')
  
     

})

app.get('/signup', (req, res) => {
    res.render('signup.ejs');
})

app.get('/leaderBoard', (req, res) => {
    User.find().sort('username').exec(function(err, users){
        if(err){
            console.log(err)
        } else {
            var stats = users.reduce(function(a, b){
                a.push('UserName ' +  b.username  + " Number of Questions " + b.totalQuestions + "Questions Correct " + b.questionsRight +  " Number of Challenges " + b.showDowns  )
                return a;

            }, [])
        }
       
        res.send(stats)

    })
})




app.post('/signup', (req, res, done) => {
    var username = req.body.username;
    var password = req.body.password;


    User.findOne({ username: username })
        .exec(function (err, found) {
            if (!found) {
                let user = new User({
                    username: username,
                    password: password
                });
                user.save((err, success) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Welcome to the Game')
                        res.redirect('/');
                        
                    }

                })
            } else {

          
           res.redirect('/retry');

            }
        });

});

app.get('/answer', (req, res) => {

    app.get('https://opentdb.com/api.php?', (req, res) => {
        console.log(req.body)
    })
    

    res.render('/quiz.ejs');









})

module.exports = app;