// Template friend data
Person = require("./person");

let friends = [];
friends.push(new Person("Mr Lazy", "https://vignette.wikia.nocookie.net/mrmen/images/0/0a/Mr-lazy-6a.PNG/revision/latest?cb=20171007012755", [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]));
friends.push(new Person("Mr No", "https://vignette.wikia.nocookie.net/mrmen/images/f/f4/Mr_No_front_cover.jpg/revision/latest?cb=20180202114928", [4, 2, 5, 2, 2, 4, 2, 2, 3, 2]));
friends.push(new Person("Mr Right", "https://vignette.wikia.nocookie.net/mrmen/images/c/cd/Mr._Right.PNG/revision/latest?cb=20110521140617", [3, 3, 3, 3, 3, 4, 4, 4, 4, 4]));
friends.push(new Person("Mr Cheerful", "https://vignette.wikia.nocookie.net/mrmen/images/1/1c/Mr-Cheerful-3A.PNG/revision/latest?cb=20170528191619", [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]));
friends.push(new Person("Mr Miserable", "https://vignette.wikia.nocookie.net/mrmen/images/e/e9/Mr._Miserable.PNG/revision/latest?cb=20110524232526", [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
friends.push(new Person("Mr Muddle", "https://vignette.wikia.nocookie.net/mrmen/images/7/7b/Mr_Muddle_1.jpg/revision/latest?cb=20170519081704", [2, 3, 4, 4, 5, 1, 2, 5, 2, 1]));

module.exports = friends;