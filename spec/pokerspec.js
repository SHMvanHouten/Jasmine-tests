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
        expect(dealer.checkForPair(hand)).toEqual("3");
    });
    it("should tell if there is any pairs in the hand", function(){
        hand = ["3S","4H","5H","7H","6D"];
        expect(dealer.checkForPair(hand)).toEqual(0);
    });
    it("should tell if there is any pairs in the hand", function(){
        hand = ["3S","4H","3H","7H","6D"];
        expect(dealer.checkForPair(hand)).toEqual("3");
    });
    it("should tell that there is a pair of Kings in the hand", function(){
        hand = ["KS","KH","3H","7H","6D"];
        expect(dealer.checkForPair(hand)).toEqual("K");
    });


    it("should determine the King is the highest card in the hand", function(){
        hand = ["3S","KH","3H","7H","6D"];
        expect(dealer.getHighestCard(hand)).toEqual("K");
    });
    it("should determine the Queen is the highest card in the hand", function(){
        hand = ["3S","QH","3H","7H","6D"];
        expect(dealer.getHighestCard(hand)).toEqual("Q");
    });
    it("should determine the Queen is the highest card in the hand", function(){
        hand = ["QS","3H","3H","7H","6D"];
        expect(dealer.getHighestCard(hand)).toEqual("Q");
    });
    it("should determine the King is the highest card in the hand", function(){
        hand = ["KS","3H","3H","7H","6D"];
        expect(dealer.getHighestCard(hand)).toEqual("K");
    });
    it("should determine the Ace is the highest card in the hand", function(){
        hand = ["KS","AH","3H","7H","6D"];
        expect(dealer.getHighestCard(hand)).toEqual("A");
    });
    it("should determine the 7 is the highest card in the hand", function(){
        hand = ["3S","5H","3H","7H","6D"];
        expect(dealer.getHighestCard(hand)).toEqual("7");
    });

    it("should determine that there are two pairs in the hand", function(){
        hand = ["KS","KH","3D","3C","6D"];
        expect(dealer.checkForTwoPair(hand)).toEqual(["3","K"]);
    });
    it("should determine that there are two pairs 4s and Aces in the hand", function(){
        hand = ["AS","AH","4D","4C","6D"];
        expect(dealer.checkForTwoPair(hand)).toEqual(["4","A"]);
    });
    it("should determine that there are no two pairs in the hand", function(){
        hand = ["AS","AH","AD","AC","6D"];
        expect(dealer.checkForTwoPair(hand)).toEqual(0);
    });



});