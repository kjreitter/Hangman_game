var game={
     words:["baseball", "football", "soccer", "lacrosse", "basketball"],

    currentWord=null,
    lettersOfTheWord: [],
    wins: 0,
    lettersGuessed: [],
    totalGuesses: 0,
    guessesRemaining: 0,
    matchedLetters: [],
    letterGuessed=null,

setUpGame: function (){

},

upDateLettersGuessed: function(){
 
},

upDateCurrentWord: function(){

},

upDateGuessesRemaining: function(){

},

upDateWins: function(){

},

restartGame: function(){

},

upDatePage: function(letter){
    if(this.guessesRemaining === 0){
        this.restartGame();
    }
    else{
        this.upDateGuesses(letter);
        this.upDateCurrentWord(letter);
    }
},


};

game.setUpGame();

document.onkeyup() = function(event) {
    game.letterGuessed = String.fromCharCode(event.which).toLowerCase();
    game.upDatePage(game.letterGuessed);
}

