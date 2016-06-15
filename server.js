var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    request = require('request'),
    methodOverride = require('method-override');

var app =express()

app.use(cors());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('./app'));

app.get('/request', function(req, res) {
    request({url: 'http://hummingbird.me/api/v1/anime/6589'}, function (error, response, body) {
        console.log('body ', body)
        res.send(JSON.stringify(body))
    });
})

app.listen(3000, function() { console.log('server on port 3000') })