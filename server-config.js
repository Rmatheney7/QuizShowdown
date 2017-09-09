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

app.get('/leaderboard', (req, res) => {
    User.find().sort('username').exec(function(err, users){
        for(var i = 0; i< users.length; i++){
            console.log(users[i].username, users[i].questionsRight);
            res.end();
        }

    })
})



app.post('/signup', (req, res, done) => {
    console.log(req.body.username, req.body.password);
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
                        res.redirect('/retry')
                        
                    }

                })
            } else {

           console.log('try again')
           res.redirect('/retry');

            }
        });

});

app.post('/answer', (req, res) => {
    console.log(req.body.answer);








})

module.exports = app;