function Person(name, url, answers) {
    this.name = name;
    this.url = url;
    this.answers = answers;

    /**Check friend compatibility by comparing survey answers. Takes in a Person object and outputs an integer, the compatibility score. */
    this.nowKiss = function(inputFriend) {
        let result = 0;
        for (i in this.answers) {
            result += Math.abs(parseInt(this.answers[i]) - parseInt(inputFriend.answers[i]));
        }
        return result;
    }
}

module.exports = Person;