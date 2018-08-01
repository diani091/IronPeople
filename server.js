// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");


// Sets up the Express App
// =============================================================
var app = express();
// Set the port of our application
var PORT = process.env.PORT || 3000;

// Requiring Models
var db = require("./models");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname, "/public/s"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({defaultLayout: "main"})
);

app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/Routes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Syncing sequelize models, start Express app, begin listening to client requests
// ============================================================= 
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    });
});

module.exports = app;
