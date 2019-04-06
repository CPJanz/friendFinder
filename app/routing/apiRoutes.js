var path = require("path");
var friends = require("../data/friends");
let Person = require("../data/person")

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        newPerson = new Person(req.body.name, req.body.url, req.body.answers);;
        let bestie = friends[0]; //Initialize our starting bestie to index 0.
        let lowScore = newPerson.nowKiss(friends[0]); //Initialize our starting lowscore to score from index 0.
        for (let i = 1; i < friends.length; i++) { //Check all other friends for better compatibility.
            let score = newPerson.nowKiss(friends[i]);
            if (score < lowScore) {
                lowScore = score;
                bestie = friends[i];
            }
        }
        res.json(bestie); //Respond with the bestie for the client to display in a modal.
        friends.push(newPerson); //Once bestie is found we can add the new person to the friends array.
    });

}