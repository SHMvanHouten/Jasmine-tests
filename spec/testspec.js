describe("Guessing Game", function(){
    it("picks a random number between 1 and 100", function(){
        var game = new GuessingGame();
        expect(game.showsIfRandomNumber()).toBeTruthy();
    });
    it("will tell what turn the player is on", function(){
        var game = new GuessingGame();
        expect(game.showPlayerTurn()).toEqual(1);
    });
    it("will tell what turn the player is on after player has had a guess", function(){
        var game = new GuessingGame();
        game.guessNumber();
        expect(game.showPlayerTurn()).toEqual(2);
    });
    it("will tell that the player's guess was correct", function(){
        var game = new GuessingGame(50);
        expect(game.guessNumber()).toBeTruthy();
    });
    it("will tell that the player's guess was too low", function(){
        var game = new GuessingGame(25);
        expect(game.guessNumber()).toEqual("Wrong! Too low!");
    });
    it("will tell that the player's guess was too High", function(){
        var game = new GuessingGame(75);
        expect(game.guessNumber()).toEqual("Wrong! Too high!");
    });



});