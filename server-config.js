const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./dbConfig.js');
const User = require('./user.js');
const Promise = require('bluebird');
const path = require('path');



const app = express();




app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');

})

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
})


app.post('/signup', (req, res) => {
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
                        res.redirect('/')
                    }

                })
            } else {

                console.log('username taken, choose another');
                res.redirect('/signup')

            }
        });

});

app.post('/answer', (req, res) => {
    console.log(req.body.answer);








})

module.exports = app;