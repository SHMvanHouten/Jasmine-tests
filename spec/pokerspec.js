describe("Poker", function(){
    beforeEach(function(){
        dealer = new Dealer();
    })
    describe("compareHands", function(){
        xit("should say FourOfAKind wins over flush", function(){
            handPlayer1 = new HandOfCards("3S","4S","8S","AS","TS");
            handPlayer2 = new HandOfCards("QH","QS","QC","QD","4D");
            expect(dealer.compareHands()).toEqual("player2");
        })
    });

    it("should tell if there is any pairs in the hand", function(){
        hand = ["3S","4H","5H","3H","6D"];
        expect(dealer.checkForPair(hand)).toEqual(3);
    });
    it("should tell if there is any pairs in the hand", function(){
        hand = ["3S","4H","5H","7H","6D"];
        expect(dealer.checkForPair(hand)).toEqual(0);
    });
    it("should tell if there is any pairs in the hand", function(){
        hand = ["3S","4H","3H","7H","6D"];
        expect(dealer.checkForPair(hand)).toEqual(3);
    });

    
});