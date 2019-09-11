let Word = require("./word.js")
let inquirer = require("inquirer")

// array of alphabet
let letterArray = "abcdefghijklmnopqrstuvwxyz"
// list of words.
// I may want to change this to and editable addable folder at a later date.
let wordOptions = ["devine","polyester","pink flamingos","mary vivian pearce","cookie mueller","susan walsh","david lochary","mink stole","desperate living","female trouble","edith massey"];
// Variables
let randomIndexer = Math.floor(Math.random() * wordOptions.length);
let randomWord = wordOptions[randomIndexer];
let chosenWord = new Word(randomWord);

let requireNewWord = false;

let incorrectLetters = [];
let correctLetters = [];

let guessesLeft = 10;






// function 
function initializeGame(){
    
    // random word picker
    if (requireNewWord){
        // selects a random word.
        randomIndexer = Math.floor(Math.random() * wordOptions.length);
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
                if (!letterArray.includes(input.userInput) || input.userInput.length> 1){
                    console.log("\nPlease try again\n");
                    initializeGame();
                }else{
    
                    if (incorrectLetters.includes(input.userInput) || correctLetters.includes(input.userInput) || input.userInput === ""){
                        console.log("\n You either already guessed that or didn't enter anything.")
                        initializeGame()
                    } else{
                        let wordCheckArray = [];

                        chosenWord.userGuess(input.userInput);

                        chosenWord.lettArray.forEach(wordCheck);

                        if(wordCheckArray.join('') === wordComplete.join('')){
                            console.log("\n Incorrect \n");

                            incorrectLetters.push(input.userInput);
                            guessesLeft--;
                        }else{
                            console.log("\n Correct \n");

                            correctLetters.push(input.userInput);
                            
                        };

                        chosenWord.log();

                        console.log(`Guesses Left: ${guessesLeft} \n`);

                        console.log(` Letters Guessed: ${incorrectLetters.join(",")} \n`);

                        if (guessesLeft > 0){
                            initializeGame()
                        } else {
                            console.log("\nYou lost the Game!\n");
                            resartGame();
                        }
                        
                        function wordCheck(key){
                            wordCheckArray.push(key.guessed)
                        }
                    }
                }
            })
    } else{
        console.log("You won!\n");
        resartGame();
    }

    function completeCheck(key){
        wordComplete.push(key.guessed);
    }
}

    
// function restart game.
let resartGame = function(){
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to play again?",
                choices: [ "Play Again", "Exit"],
                name: "restart"
            }
        ])
        .then (function(input){
            if (input.restart === "Play Again"){
                requireNewWord = true;
                incorrectLetters = [];
                correctLetters = [];
                guessesLeft = 10;
                initializeGame();
            }else{
                return
            }
        })
}

initializeGame();

