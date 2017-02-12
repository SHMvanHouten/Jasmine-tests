function GuessingGame(){

    var guess = guess
    var numberGenerator = Math.floor(Math.random() * 100) + 1;
    var randomNumber;
    var playerTurn = 1;
    var previousGuesses = [];

    this.compareNumbers = function(){
        if(this.getRandomNumber() == guess){
            return true;
        }
        else if(guess < this.getRandomNumber()){
            this.addPreviousGuess()
            return "Wrong! Too low!";
        }
        else if(guess > this.getRandomNumber()){
            this.addPreviousGuess()
            return"Wrong! Too high!";
        }
    };
    this.generateNumber = function(){
        return randomNumber = numberGenerator
    };
    this.getRandomNumber =  function(){
//        return randomNumber;
        return 50;
    };

    this.showPlayerTurn = function showPlayerTurn(){
        return playerTurn
    };
    this.guessNumber = function(input){
        guess = input
        playerTurn++;
        return this.compareNumbers();
    };
    this.addPreviousGuess = function(){
        previousGuesses.push(guess);
    };
    this.showPreviousGuesses = function(){
        return previousGuesses
    }

};


GuessingGame.prototype.showsIfRandomNumber = function(){
    return (this.getRandomNumber() >= 1 && this.getRandomNumber() <= 100)
};
