const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');   
})

app.post('/answer', (req, res) => {
    console.log(req.body.answer);
    


})

module.exports = app;