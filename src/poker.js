function HandOfCards (cards){

}
function Dealer(){


    var determineValue = function(value){
    var pictureValues = {T: 10, J: 11, Q: 12, K:13, A:14};
        if (isNaN(value)){return pictureValues[value];}
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
    this.changeFaceToValue = function(hand){
        hand = hand.map(function(x){
            return determineValue(x);
        });
        return hand;
    };
    this.returnValueToFace = function(value){
        var faces = ["T","J","Q","K","A"];
        if (value<10){return value;}
        else{
            for(var j = 0; j<5;j++){
                if(j+10 === value){return faces[j]}
            }
        }
    };


}
Dealer.prototype.checkForPair = function(hand){
    return this.checkForRecurring(hand,2);
};
Dealer.prototype.getHighestCard = function(hand){
    var highestValue = this.getHighestValue(hand);
    return this.returnValueToFace(highestValue);
};
Dealer.prototype.checkForTwoPair = function(hand){
    var pair = this.checkForPair(hand);
    if (pair !== 0) {
        var handWithoutSuits = this.removeSuits(hand);
        while (handWithoutSuits.indexOf(pair) > -1) {
            handWithoutSuits.splice(handWithoutSuits.indexOf(pair), 1);
        }
        var secondPair = this.checkForPair(hand);
        if (secondPair !== 0) {
            return [pair, secondPair].sort();
        }
    }
    return 0;
};
Dealer.prototype.checkForThreeOfAKind = function(hand){
    return this.checkForRecurring(hand,3);
};
Dealer.prototype.checkForStraight = function(hand){
    var handWithoutSuits = this.removeSuits(hand);
    var ace = handWithoutSuits.indexOf("A");
    if(handWithoutSuits.indexOf("2")> -1 && ace>-1){handWithoutSuits[ace] = "1"}
    handWithoutSuits = this.changeFaceToValue(handWithoutSuits);
    function compareNumbers(a,b){
        return Number(a)-Number(b);
    }
    handWithoutSuits = handWithoutSuits.sort(compareNumbers);
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