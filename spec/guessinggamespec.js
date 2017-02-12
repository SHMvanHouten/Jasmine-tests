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
        var game = new GuessingGame();
        expect(game.guessNumber(50)).toBeTruthy();
    });
    it("will tell that the player's guess was too low", function(){
        var game = new GuessingGame();
        expect(game.guessNumber(25)).toEqual("Wrong! Too low!");
    });
    it("will tell that the player's guess was too High", function(){
        var game = new GuessingGame();
        expect(game.guessNumber(75)).toEqual("Wrong! Too high!");
    });
    it("will give the previous guesses", function(){
        var game = new GuessingGame();
        game.guessNumber(88)
        expect(game.showPreviousGuesses()).toEqual([88]);
    });

    it("will give the previous guesses", function(){
        var game = new GuessingGame();
        game.guessNumber(88)
        game.guessNumber(25)
        expect(game.showPreviousGuesses()).toEqual([88,25]);
    });


});