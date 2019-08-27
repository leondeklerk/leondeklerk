var express = require('express');
var http = require('http');
var app = express();
var port = normalizePort(process.env.PORT || '3000');

app.use(express.static(__dirname + "/public"));

app.get("/node", function (req, res) {
    res.status(200).send("Node");
});

app.get("/applications", function (req, res) {
    res.sendFile("apps.html", {root: "./public"});
});

app.get("/*", function (req, res) {
    res.sendFile("index.html", {root: "./public"});
});

var server = http.createServer(app);
server.listen(port);


function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}