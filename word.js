let Letter = require("./letter");

let Word = function(answer){
    // this answer letter array
    this.letArray = [];

    for(let i = 0; i < answer.length; i++){
        let letter = new Letter(answer[i]);
        this.letArray.push(letter);
    }

}

module.exports = Word;