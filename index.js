var express = require('express')
var app = express()
var morgan = require('morgan')
var path = require('path');

var port = process.env.PORT || 8080

if (process.env.NODE_ENV === 'dev') {
    app.use(morgan('dev')) // log requests to the console
}

app.use(express.static('index.html'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(port)
console.log('Server listening on port: ' + port)