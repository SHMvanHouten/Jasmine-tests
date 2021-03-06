describe ("coin changer", function (){
    it ("should return 1 * 100 cent of input = 100", function(){
        var changer1 = new CoinChanger ();
        expect (changer1.showCoins(100)).toEqual ([0,1,0,0,0,0,0,0]);
    });
    it ("should return 2 * 100 and 1 * 50 cent of input = 250", function(){
        var changer1 = new CoinChanger ();
        expect (changer1.showCoins(250)).toEqual ([1,0,1,0,0,0,0,0]);
    });
    it ("should return 1 * 50 cent of input = 50", function(){
        var changer1 = new CoinChanger ();
        expect (changer1.showCoins(50)).toEqual ([0,0,1,0,0,0,0,0]);
    });
    it ("should return 1 * 20 cent of input = 20", function(){
        var changer1 = new CoinChanger ();
        expect (changer1.showCoins(20)).toEqual ([0,0,0,1,0,0,0,0]);
    });
    it ("should tell: The coins you require: 1 times 20 cents of input = 20", function(){
        var changer1 = new CoinChanger ();
        expect (changer1.declareCoins(20)).toEqual ("The coins you require: 1 times 20 cents.");
    });
    it ("should tell: The coins you require: 1 times 50 cents and 1 times 20 cents of input = 20", function(){
        var changer1 = new CoinChanger ();
        expect (changer1.declareCoins(70)).toEqual ("The coins you require: 1 times 50 cents, 1 times 20 cents.");
    });
    it ("should tell: The coins you require: 1 times 50 cents, 1 times 20 cents, 1 times 5 cents, 1 times 2 cents. of input = 77 ", function(){
        var changer1 = new CoinChanger ();
        expect (changer1.declareCoins(77)).toEqual ("The coins you require: 1 times 50 cents, 1 times 20 cents, 1 times 5 cents, 1 times 2 cents.");
    });

    it("should change the coinsystem to 'gulden'", function(){
       var changer2 = new CoinChanger();
       changer2.changeCurrency("gulden");
       expect(changer2.coins).toEqual([500,250,100,50,25,10,5])
    });
    it("should change the coinsystem to 'euro'", function(){
       var changer3 = new CoinChanger();
       changer3.changeCurrency("gulden");
       changer3.changeCurrency("euro");
       expect(changer3.coins).toEqual([200,100,50,20,10,5,2,1])
    });
    it("should tell: The coins you require: 1 times 50 cents, 1 times 25 cents. of input 77", function(){
       var changer2 = new CoinChanger();
       changer2.changeCurrency("gulden");
       expect(changer2.declareCoins(77)).toEqual("The coins you require: 1 times 50 cents, 1 times 25 cents.")
    });
    it("should tell: The coins you require: 1 times 50 cents, 1 times 25 cents, 1 times 10 cents, 1 times 5 cents. of input 88", function(){
       var changer2 = new CoinChanger();
       changer2.changeCurrency("gulden");
       expect(changer2.declareCoins(88)).toEqual("The coins you require: 1 times 50 cents, 1 times 25 cents, 1 times 10 cents, 1 times 5 cents.")
    });
    it("should change the coinsystem to 'euroAbove50Cents'", function(){
        var changer4 = new CoinChanger();
        changer4.changeCurrency("euroAbove50Cents");
        expect(changer4.coins).toEqual([200,100,50])
        expect(changer4.declareCoins(247)).toEqual("The coins you require: 1 times 200 cents, 1 times 50 cents.")
    });
    it("should tell: The coins you require: 1 times 200 cents, 1 times 50 cents. ", function(){
        var changer4 = new CoinChanger();
        changer4.changeCurrency("euroAbove50Cents");
        expect(changer4.coins).toEqual([200,100,50])
        expect(changer4.declareCoins(253)).toEqual("The coins you require: 1 times 200 cents, 1 times 50 cents.")
    });

});
