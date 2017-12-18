var db = require("../models");

module.exports = function (app) {

    app.post("/api/clientSurvey", function (req, res) {
        console.log("I am req.body ", req.body);
        db.ClientData.create(req.body);
        res.json({});
        // res.json(dbPost);

    });

  // GET route for getting all of the todos
  app.get("/api/clientSurvey", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.ClientData.findAll({}).then(function(dataa) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dataa);
    });
  });

    app.post("/api/weightSurvey", function (req, res) {
        console.log("HELLOOOO");
        var weightData = req.body;
        console.log(weightData);
        console.log("i am the db ", db.Weight);
        // what does this line do? using sequelize to create new entry to the table(model)
        db.Weight.create(req.body);
        res.json(weightData);


        // route middleware
        // what is next(); in Express.js
        // what is res.redirect();

        // after the data is in the data base
        // use the saved weight data to do a chart
        //chart the data by week and the y axis is your weight
    });

}