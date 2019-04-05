var path = require("path");
var friends = require("../data/friends");

module.exports = function(app) {
    //is there a way to not need this route and only use the if route below?
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

    app.get("/:subPage", function(req, res) {
        if (req.params.subPage === "survey") {
            console.log(res);
            res.sendFile(path.join(__dirname, "../public/survey.html"));
        } else {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        }
    });

}