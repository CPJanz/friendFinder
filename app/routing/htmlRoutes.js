var path = require("path");
var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

    app.get("/:subPage", function(req, res) {
        if (req.params.subPage === "survey") {
            res.sendFile(path.join(__dirname, "../public/survey.html"));
        } else {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        }
    });

}