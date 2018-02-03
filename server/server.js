var express = require("express");
var bodyParser = require("body-parser");

// // Sets up the Express App
// // =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


// Requiring our models for syncing
var db = require("./models");
const Sequelize = require('sequelize');



// // Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// // Static directory
app.use(express.static("public"));


// Old Routes from Project-2 PROBALY CAN DELETE
// =============================================================
// require("./routes/index.js")(app);
// require("./routes/user.js")(app);
// require("./public/js/inventory-view-all.js")(app);
// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);
// require("./routes/user.js")(app);
// require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


// });

