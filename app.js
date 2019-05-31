const http = require('http');
const port = 3000;

const cheerio = require('cheerio');
const $ = cheerio.load('<h2 class="title">Hellooooo world</h2>');

const express = require('express');
const app = express();


//Routes
app.route('/gusulandsect', function(req,res) {
    res.send('gusulandsect');
});





app.listen(3000);