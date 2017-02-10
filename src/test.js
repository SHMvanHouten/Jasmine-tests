function GuessingGame(){

    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var PlayerTurn = 1;

    this.getRandomNumber =  function(){
        return randomNumber;
    };
    this.showPlayerTurn = function showPlayerTurn(){
        return PlayerTurn
    };
};


GuessingGame.prototype.showsIfRandomNumber = function(){
    return (this.getRandomNumber() >= 1 && this.getRandomNumber() <= 100)
};
