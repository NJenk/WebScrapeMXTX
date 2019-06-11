//const http = require('http');
//const port = 3000;

//https://scotch.io/tutorials/scraping-the-web-with-node-js

const path = require('path');
const express = require('express');
const app = express();
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');


//Webscrape route
app.get('/scrape', function(req,res) {
    //Call the website
    url = 'https://modao-zushi.fandom.com/wiki/Wei_Wuxian';

    request(url, function(error, response, html) {
        if(!error) {
            var $ = cheerio.load(html);
            var json = {name: ""};

            $('h3.pi-data-label.pi-secondary-font').filter(function() {
                
                var data = $(this);
                name = data.get().length;

                json.name = name;
            })
        }

        fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err)
        {
        console.log('File successfully written');
        })
    
        res.send('Check console');
    })
})



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


app.listen(3000)
console.log('Hosted on port 3000');
exports = module.exports = app;