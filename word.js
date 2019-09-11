let Letter = require("./letter.js");

let Word = function(answer){
    // console.log(`Answer ${answer}`)
    // this answer letter array
    this.lettArray = [];

    for(let i = 0; i < answer.length; i++){
        let letter = new Letter(answer[i]);
        this.lettArray.push(letter);
    }

    this.log = function(){
        answerLog = "";
        for (let l = 0; l < this.lettArray.length; l++){
            answerLog += this.lettArray[l] + " ";
        }
        console.log(answerLog + "\n")
    }

    this.userGuess = function(input){
        for(let j = 0; j < this.lettArray.length; j++){
            this.lettArray[j].guess(input);
        }
    }
};

module.exports = Word;