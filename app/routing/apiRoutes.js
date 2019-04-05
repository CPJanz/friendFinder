var path = require("path");
var friends = require("../data/friends");
let Person = require("../data/person")

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        //TODO: create a get route `/api/friends` This displays all possible friends
        res.json(friends);
        console.log("friends get route");
    });

    app.post("/api/friends", function(req, res) {
        newPerson = new Person(req.body.name, req.body.url, req.body.answers);;
        // TODO: FIND FRIEND
        let bestie = friends[0];
        let lowScore = newPerson.nowKiss(friends[0]);
        for (let i = 1; i < friends.length; i++) {
            let score = newPerson.nowKiss(friends[i]);
            if (score < lowScore) {
                lowScore = score;
                bestie = friends[i];
            }
        }
        res.json(bestie);
        // TODO: push to friend array
        friends.push(newPerson);
    });

}