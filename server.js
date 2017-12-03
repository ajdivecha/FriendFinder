
// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// ==============================================================================

// EXPRESS CONFIGURATION
var app = express();
var PORT = process.env.PORT || 3000;
// ==============================================================================

// SETUP EXPRESS APP
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use (bodyParser.text());
app.use (bodyParser.json ({type: "application/vnd.api+json"}));

// ================================================================================

// ROUTER
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// =============================================================================

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
