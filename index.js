let Word = require("./word")
let inquirer = require("inquirer")

// array of alphabet
let alphaString = "abcdefghijklmnopqrstuvwxyz"

// Variables
let randomIndexer;
let randomWord;
let chosenWord;

let requireNewWord = false;

let incorrectLetters = [];
let correctLetters = [];

let guessesLeft = 10;


// list of words.
// I may want to change this to and editable addable folder at a later date.
let wordOptions = ["Devine","Polyester","Pink Flamingos","Mary Vivian Pearce","Cookie Mueller","Susan Walsh","David Lochary","Mink Stole","Desperate Living","Female Trouble","Edith Massey"];



// function 
let initializeGame = function(){
    
    // random word picker
    if (requireNewWord){
        // selects a random word.
        randomIndexer = Math.floor(Math.random()*wordOptions.length);
        randomWord = wordOptions[randomIndexer];

        // passes random word through word.js
        chosenWord = new Word(randomWord);

        requireNewWord = false;
    }

    // if statment to intiate inquirer.
    let wordComplete = [];
    chosenWord.lettArray.forEach(completeCheck);

    if (wordComplete.includes(false)) {
        inquirer
            .prompt([
                {
                   type: "input",
                   message: "Guess a letter between a-z!",
                   name: "userInput" 
                }
            ])
            .then(function(input){
                
            })
    }







}

    

    


// function restart game.

