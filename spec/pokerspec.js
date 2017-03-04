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
    describe("checkForPair",function(){
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
    });
    describe("getHighestCard", function(){
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
    });
    describe("checkForTwoPair",function(){
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
    describe("checkForThreeOfAKind",function(){
        it("should determine that it's a three of a kind", function(){
            hand = ["AS","AH","AD","JC","6D"];
            expect(dealer.checkForThreeOfAKind(hand)).toEqual("A");
        });
        it("should determine that it's not a three of a kind", function(){
            hand = ["AS","AH","KD","JC","6D"];
            expect(dealer.checkForThreeOfAKind(hand)).toEqual(0);
        });
        it("should determine that it's a three of a kind", function(){
            hand = ["KS","KH","AD","AC","AD"];
            expect(dealer.checkForThreeOfAKind(hand)).toEqual("A");
        });
    });
    describe("checkForStraight", function(){
        it("should determine that it's a straight and the 6 is high", function(){
            hand = ["2H","3S","4H","5S","6H"];
            expect(dealer.checkForStraight(hand)).toEqual("6");
        });
        it("should determine that it's a straight and the Jack is high", function(){
            hand = ["7H","8S","9H","TS","JH"];
            expect(dealer.checkForStraight(hand)).toEqual("J");
        });


    });


});