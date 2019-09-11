function Letter(value) {
    this.letter = value;
    this.guessed = false;
    this.toString = function() {

        if(this.letter === " "){
            this.guessed = true;
            // console.log("space check")
            return " ";
            
        }else {
            if (this.guessed === false){
                // console.log("dash check")
                return "_";
            } else {
                // console.log(`letter check ${this.letter}`)
                return this.letter;
            }
        };
    };

    this.guess = function (guess) {
        if(guess === this.letter){
            this.guessed = true;
        }
    }
};

// Letter("hello")

module.exports = Letter;