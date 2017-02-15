describe ("coin changer", function (){
    it ("should return 1 * 100 cent of input = 100", function(){
        var game = new CoinChanger ();
        expect (game.showCoins(100)).toEqual ([1,0,0,0,0,0,0]);
    });
    it ("should return 2 * 100 and 1 * 50 cent of input = 250", function(){
        var game = new CoinChanger ();
        expect (game.showCoins(250)).toEqual ([2,1,0,0,0,0,0]);
    });
    it ("should return 1 * 50 cent of input = 50", function(){
        var game = new CoinChanger ();
        expect (game.showCoins(50)).toEqual ([0,1,0,0,0,0,0]);
    });
    it ("should return 1 * 20 cent of input = 20", function(){
        var game = new CoinChanger ();
        expect (game.showCoins(20)).toEqual ([0,0,1,0,0,0,0]);
    });
    it ("should tell: The coins you require: 1 times 20 cents of input = 20", function(){
        var game = new CoinChanger ();
        expect (game.declareCoins(20)).toEqual ("The coins you require: 1 times 20 cents.");
    });
    it ("should tell: The coins you require: 1 times 50 cents and 1 times 20 cents of input = 20", function(){
        var game = new CoinChanger ();
        expect (game.declareCoins(70)).toEqual ("The coins you require: 1 times 50 cents, 1 times 20 cents.");
    });
    it ("should tell: The coins you require: 1 times 50 cents, 1 times 20 cents, 1 times 5 cents, 1 times 2 cents. of input = 77 ", function(){
        var game = new CoinChanger ();
        expect (game.declareCoins(77)).toEqual ("The coins you require: 1 times 50 cents, 1 times 20 cents, 1 times 5 cents, 1 times 2 cents.");
    });

});