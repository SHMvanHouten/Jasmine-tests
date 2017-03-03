function HandOfCards (cards){

}
function Dealer(){
    var pictureValues = {T: 10, J: 11, Q: 12, K:13,A:14};

    this.determineValue = function(value){
        if (isNaN(value)){return pictureValues[value];}
        return Number(value);
    };

}
Dealer.prototype.checkForPair = function(hand){
    for(var i = 0; i<5; i++){
        for(var j = i+1; j<5; j++){
            if(hand[i][0] === hand[j][0]){return Number(hand[i][0])}
       }
    }
    return 0;
};
Dealer.prototype.getHighestCard = function(hand){
    var highestValue = 0;
    var faces = ["T","J","Q","K","A"];
    for(var i = 0; i<5; i++){
        var value = this.determineValue(hand[i][0]);
        if (value> highestValue){highestValue = value}
    }
    if (highestValue<10){return highestValue;}
    else{
        for(var j = 0; j<5;j++){
            if(j+10 === highestValue){return faces[j]}
        }
    }
};