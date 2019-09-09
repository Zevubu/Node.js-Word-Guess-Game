let Word = require("./word")
let inquirer = require("inquirer")

// array of alphabet
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables
let randomIndexer;
let randomWord;
let chosenWord;

let requireNewWord = false;

let incorrectLetters = [];
let correctLetters = [];

let guessesLeft = 10;


// list of words in objects to give more info on person guessed.
// console.log(alphabet.indexOf)
// Objects to pull from
let devine = {
    title: "Devine",
    dateOrAge: "Born: October 19, 1945. Died: March 7, 1988",
    hint: "The Filthiest person who ever lived!",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/devine.jpg",
    sound: "assets/sounds/Devine-Dawn Davenport - Cha Cha Heels for Christmas.MP3",
};
let polyester = {
    title: "Polyester",
    dateOrAge: "1981",
    hint: "The one movie I haven't seen. So I don't have a hint for you.",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/polyester.jpg",
    sound: "assets/sounds/polyester.mp3",
};
let pinkFlamingos = {
    title: "Pink Flamingos",
    dateOrAge: "1972",
    hint: "The fithiest movie about the filthiest people!",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/pink.jpg",
    sound: "assets/sounds/Mondo Trasho.MP3",
};
let mary = {
    title: "Mary Vivian Pearce",
    dateOrAge: "Born:November 9, 1947",
    hint: "From the scandalous getting into all kinds of wondefully filthy things, to the debutant looking for a thrill she has you covered!",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/Mary.jpg",
    sound: "assets/sounds/Mondo Trasho.MP3",
};
let cookie = {
    title: "Cookie Mueller",
    dateOrAge: "Born: March 2, 1949. Died: November 10, 1989",
    hint: "You want a shiv and an 8ball to keep in you weave? She's the one to ask. ",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/cookie.jpg",
    sound: "assets/sounds/Mondo Trasho.MP3",
};
let susan = {
    title: "Susan Walsh",
    dateOrAge: "Born: March 30, 1948. Died: February 6, 2009",
    hint: "Only the most eite filth here! She'll cut ya, rob ya and look good doing it.",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage:"assets/images/Susan.jpg" ,
    sound: "assets/sounds/Mondo Trasho.MP3",
};
let david = {
    title: "David Lochary",
    dateOrAge: "Born: August 21, 1944. Died: July 29, 1977",
    hint: "Personal fashion icon. He truely had the best facial hair! (Didn't help? Don't really care.)",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/david.jpg",
    sound: "assets/sounds/david.MP3",
};
let minkStole = {
    title: "Mink Stole",
    dateOrAge: "How dare you! But if you must know, she was born in the late 1940s ",
    hint: "Quite posibly the most distinguished highbrow filth around.",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/mink.gif",
    sound: "assets/sounds/mink-stole-as-Connie-Marble.MP3",
};

let desperateLiving = {
    title: "Desperate Living",
    dateOrAge: "1977",
    hint: "Mortvilles just so lovely this time of year.(also it's a movie title)",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/desperate.jpg",
    sound: "assets/sounds/Mondo Trasho.MP3",
};

let femaleTrouble = {
    title: "Female Trouble",
    dateOrAge: "1974",
    hint: "She's got lots of problems!(also it's a movie title)",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/femaletrouble.jpg",
    sound: "assets/sounds/femaletrouble.mp3",
};
let edith = {
    title:"Edith Massey",
    dateOrAge:"Born: May 28, 1918. Died: October 24, 1984",
    hint: "The Filthiest person who ever lived!",
    quotes: [
        "filler", "filler", "full",
    ],
    objectImage: "assets/images/edith.jpg",
    sound: "assets/sounds/edith-as-Aunt-Ida.MP3",
};
// alert(devine.title)

// list of objects
let currentObject = [devine, cookie, susan, david, mary, polyester, minkStole, desperateLiving, pinkFlamingos, femaleTrouble, edith];


// puts random word into Word file.


// function 

    // random word picker

    // if statment to intiate inquirer.


// function restart game.

