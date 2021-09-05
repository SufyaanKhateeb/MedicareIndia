var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object

// Endpoint to Get a list of users
app.get('/', function (req, res) {
    fs.readFile(__dirname + "/users.json", 'utf8', function (err, data) {

        res.end(data); // you can also use res.send()
    });
})

// Create a server to listen at port 8080
var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})