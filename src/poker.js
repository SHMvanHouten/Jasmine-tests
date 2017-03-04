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
    this.removeSuits = function(hand){
        for(var i = 0; i< 5; i++){
            hand[i] = hand[i][0];
        }
        return hand;
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
        while(i<4){
            consecutive = (Number(hand[i])+1 == hand[i+1]);
            i++;

        }
        return consecutive;
    };
    this.changeFacesToValues = function(hand){
        hand = hand.map(function(x){
            return determineValue(x);
        });
        console.log(hand);
        return hand;
    };
    this.returnValuesToFaces = function(value){
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
    return this.returnValuesToFaces(highestValue);
    // var faces = ["T","J","Q","K","A"];
    // if (highestValue<10){return highestValue;}
    // else{
    //     for(var j = 0; j<5;j++){
    //         if(j+10 === highestValue){return faces[j]}
    //     }
    // }
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
    handWithoutSuits = this.changeFacesToValues(handWithoutSuits);
    function compareNumbers(a,b){
        return Number(a)-Number(b);
    };
    handWithoutSuits = handWithoutSuits.sort(compareNumbers);
    if (this.hasConsecutiveValues(handWithoutSuits)){

        return this.returnValuesToFaces(handWithoutSuits[4]);
    }
    return 0;
};