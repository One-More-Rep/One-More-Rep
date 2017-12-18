// Dependencies
var path = require("path");

// Routes
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    // change to home page when it's done
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/dashboardClientSurvey.html"));
    });

    app.get("/clientSurvey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/dashboardClientSurvey.html"));
    });

    // weightSurvey route loads the weightSurvey.html page,
    // where users can enter new characters to the db
    // res.sendFile is sending the client all the information in the html page weightSurvey
    app.get("/weightSurvey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/dashboardWeightSurvey.html"));
    });


    // add 404 page
    app.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/404notfound.html"));
    });

}