//const http = require('http');
//const port = 3000;
const path = require('path');

const cheerio = require('cheerio');
const $ = cheerio.load('<h2 class="title">Hellooooo world</h2>');

const express = require('express');
const app = express();


//Routes
app.get('/', function(req,res) {
    res.send('Homepage');
});

app.get('/lansect', function(req,res) {
    res.sendFile(path.join(__dirname + '/gusulansect.html'));
});

app.get('/wensect', function(req,res) {
    res.sendFile(path.join(__dirname + '/qishanwensect.html'));
});

app.get('/jinsect', function(req,res) {
    res.sendFile(path.join(__dirname + '/lanlingjin.html'));
});

app.get('/jiangsect', function(req,res) {
    res.sendFile(path.join(__dirname + '/yunmengjiangsect.html'));
});

app.get('/niesect', function(req,res) {
    res.sendFile(path.join(__dirname + '/qingheniesect.html'));
});


app.listen(3000);