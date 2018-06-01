// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var responseObject = {
    reservations: [],
    wait: []
};

/*

var exampleReservations = [
    {name: "Darth Plagueis",
    phone: "6666666666",
    email: "darth@plagueis.com",
    uid: "Darth Plagueis the Wise"}
];

*/

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/script.js", function(req, res) {
    res.sendFile(path.join(__dirname, "script.js"));
});

app.get("/reserve.js", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.js"));
});

app.get("/ml.jpg", function(req, res) {
    res.sendFile(path.join(__dirname, "ml.jpg"));
});
  
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all characters
app.get("/api/reserve", function(req, res) {
    return res.json(responseObject);
});

app.post("/api/reserve", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;
    console.log(newReservation);
  
    if (responseObject.reservations.length < 4) {
        responseObject.reservations.push(newReservation);
    res.json(newReservation);
    }
    else {
        responseObject.wait.push(newReservation);
    res.json(newReservation);
    }

});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});