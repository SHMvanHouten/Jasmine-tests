function GuessingGame(guess){

    var guess = guess
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var playerTurn = 1;


    this.compareNumbers = function(){
        if(this.getRandomNumber() == guess){
            return true;
        }
        else if(guess < this.getRandomNumber()){
            return "Wrong! Too low!"
        }
        else if(guess > this.getRandomNumber()){
            return"Wrong! Too high!"
        }
    };

    this.getRandomNumber =  function(){
//        return randomNumber;
        return 50;
    };

    this.showPlayerTurn = function showPlayerTurn(){
        return playerTurn
    };
    this.guessNumber = function(){
        playerTurn++;
        return this.compareNumbers();
    };
};


GuessingGame.prototype.showsIfRandomNumber = function(){
    return (this.getRandomNumber() >= 1 && this.getRandomNumber() <= 100)
};
