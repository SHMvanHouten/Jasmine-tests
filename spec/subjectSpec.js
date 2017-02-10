describe("Score at start Game", function () {
    var tennisGame;

    beforeEach(function () {
        tennisGame = new TennisGame();
    });

    it("should tell the score is 0 - 0", function () {
        var score = tennisGame.score();

        expect(score).toEqual("0 - 0");
    });
    it("should tell the score is 15 - 0 ", function () {
        tennisGame.addPointPlayerOne();
        var score = tennisGame.score();

        expect(score).toEqual("15 - 0");
    });
    it("should tell the score is 15 - 15", function () {
         tennisGame.addPointPlayerOne();
         tennisGame.addPointPlayerTwo();
         var score = tennisGame.score();

         expect(score).toEqual("15 - 15");
    });
    it("should tell the score is Deuce", function () {
         tennisGame.addPointPlayerOne();
         tennisGame.addPointPlayerOne();
         tennisGame.addPointPlayerOne();
         tennisGame.addPointPlayerTwo();
         tennisGame.addPointPlayerTwo();
         tennisGame.addPointPlayerTwo();
         var score = tennisGame.score();

         expect(score).toEqual("Deuce");
    });
    it("should tell the score is Advantage player1", function () {
         tennisGame.addPointPlayerOne();
         tennisGame.addPointPlayerOne();
         tennisGame.addPointPlayerTwo();
         tennisGame.addPointPlayerTwo();
         tennisGame.addPointPlayerOne();
         var score = tennisGame.score();

         expect(score).toEqual("Advantage player1");
        });
    it("should tell the score is Win for player1", function () {
         tennisGame.addPointPlayerOne();
         tennisGame.addPointPlayerOne();
         tennisGame.addPointPlayerTwo();
         tennisGame.addPointPlayerOne();
         tennisGame.addPointPlayerOne();
         var score = tennisGame.score();

         expect(score).toEqual("Win for player1");
    });
    it("should tell the score is Win for player2", function () {
         tennisGame.addPointPlayerOne();
         tennisGame.addPointPlayerOne();
         tennisGame.addPointPlayerTwo();
         tennisGame.addPointPlayerOne();
         tennisGame.addPointPlayerTwo();
         tennisGame.addPointPlayerTwo();
         tennisGame.addPointPlayerTwo();
         tennisGame.addPointPlayerTwo();
         var score = tennisGame.score();

         expect(score).toEqual("Win for player2");
    });

});


