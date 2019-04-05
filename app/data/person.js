function Person(name, url, answers) {
    this.name = name;
    this.url = url;
    this.answers = answers;

    this.nowKiss = function(inputFriend) {
        let result = 0;
        for (i in this.answers) {
            result += Math.abs(parseInt(this.answers[i]) - parseInt(inputFriend.answers[i]));
        }
        return result;
    }
}

module.exports = Person;