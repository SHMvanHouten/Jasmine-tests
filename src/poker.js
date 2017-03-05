function HandOfCards (cards){

}
function Dealer(){




    var determineValue = function(value){
        if (isNaN(value)){return Dealer.prototype.pictureValues[value];}
        return value;
    };

    this.getHighestValue = function(hand){
        var highestValue = 0;
        for(var i = 0; i<5; i++){
            var value = determineValue(hand[i][0]);
            if (value > highestValue){highestValue = value}
        }
        return highestValue;
    };
    this.removeCharacteristic = function(hand, characteristic){
        for(var i = 0; i< 5; i++){
            hand[i] = hand[i][characteristic];
        }
        return hand;
    };

    this.removeSuits = function(hand){
        return this.removeCharacteristic(hand,0);
    };
    this.removeValues = function(hand){
        return this.removeCharacteristic(hand,1);
    };

    this.checkForRecurring = function(hand, recurrenceNeeded){
        for(var i = 0; i<hand.length; i++){
            var amountRecurring = 1;
            for(var j = i+1; j<hand.length; j++){
                if(hand[i][0] === hand[j][0]){
                    amountRecurring++;
                    if(amountRecurring === recurrenceNeeded){return hand[i][0]}
                }
            }
            amountRecurring = 1;
        }
        return 0;
    };
    this.hasConsecutiveValues = function(hand){
        var consecutive = true;
        var i = 0;
        while(consecutive && i<4){
            consecutive = (Number(hand[i])+1 == hand[i+1]);
            i++;

        }
        return consecutive;
    };
    this.changeFacesToValues = function(hand){
        hand = hand.map(determineValue);
        return hand;
    };
    this.returnValueToFace = function(value){
        if (value<10){return value;}
        else{
            for(var face in this.pictureValues){
                if(this.pictureValues.hasOwnProperty(face) && this.pictureValues[face] === value){
                    return face;
                }
            }
        }
    };
    this.removeCardsFromHand = function(hand, cardToRemove){
        while (hand.indexOf(cardToRemove) > -1) {
            hand.splice(hand.indexOf(cardToRemove), 1);
        }
        return hand;
    };
    this.sortArray = function(array, reverseAndReturn){
        array = this.changeFacesToValues(array);
        function compareNumbers(a,b){
            return Number(a)-Number(b);
        }
        array.sort(compareNumbers);
        if(reverseAndReturn){array = array.map(this.returnValueToFace, this).reverse()}
        return array;
    }


}
Dealer.prototype.pictureValues = {T: 10, J: 11, Q: 12, K:13, A:14};
Dealer.prototype.scores = ["High Card", "Pair", "TwoPair", "ThreeOfAKind", "Straight", "Flush", "FullHouse", "FourOfAKind", "StraightFlush", "RoyalFlush"];
Dealer.prototype.checkForHighCard = function(hand){
    var highestValue = this.getHighestValue(hand);
    return this.returnValueToFace(highestValue);
};
Dealer.prototype.checkForPair = function(hand){
    return this.checkForRecurring(hand,2);
};
Dealer.prototype.checkForTwoPairs = function(hand){
    var pair = this.checkForPair(hand);
    if (pair !== 0) {
        var handWithoutSuits = this.removeSuits(hand);
        handWithoutSuits = this.removeCardsFromHand(handWithoutSuits, pair);
        var secondPair = this.checkForPair(handWithoutSuits);
        if (secondPair !== 0) {
             return this.sortArray([pair, secondPair], true);
        }
    }
    return 0;
};
Dealer.prototype.checkForThreeOfAKind = function(hand){
    return this.checkForRecurring(hand,3);
};
Dealer.prototype.checkForStraight = function(hand){
    var handWithoutSuits = this.removeSuits(hand);
    //should ace be 1 or 14:
    var ace = handWithoutSuits.indexOf("A");
    if(handWithoutSuits.indexOf("2")> -1 && ace>-1){handWithoutSuits[ace] = "1"}
    handWithoutSuits = this.sortArray(handWithoutSuits,false);
    if (this.hasConsecutiveValues(handWithoutSuits)){

        return this.returnValueToFace(handWithoutSuits[4]);
    }
    return 0;
};
Dealer.prototype.checkForFlush = function(hand){
    var handWithoutValues = this.removeValues(hand);
    var i = 0;
    while(i<4){
        if(handWithoutValues[i] !== handWithoutValues[i + 1]){return false}
        i++
    }
    return true;
};
Dealer.prototype.checkForFourOfAKind = function(hand){
    return this.checkForRecurring(hand,4);
};
Dealer.prototype.checkForFullHouse = function(hand){
    var threeOfAKind = this.checkForRecurring(hand,3);
    if(threeOfAKind === 0){return 0;}
    var handWithoutSuits = this.removeSuits(hand);
    handWithoutSuits = this.removeCardsFromHand(handWithoutSuits, threeOfAKind);
    var twoOfAKind = this.checkForRecurring(handWithoutSuits,2);
    if(twoOfAKind === 0){return 0}
    return[threeOfAKind,twoOfAKind];
};
Dealer.prototype.checkForStraightFlush = function(hand){
    var straightResult = this.checkForStraight(hand);
    if(straightResult && this.checkForStraight(hand)!==0){
        return straightResult;
    }
    return 0;
};
Dealer.prototype.checkForRoyalFlush = function(hand){
    if (this.checkForStraightFlush(hand) === "A"){return ""}
    return 0;
};
Dealer.prototype.findScore = function(hand){
    var scores = this.scores;
    for(var i = scores.length - 1; i >= 0; i--){
        var scoreType = this["checkFor" + scores[i]](hand);
        if ( scoreType !== 0){return [i,scoreType]};
    }
};