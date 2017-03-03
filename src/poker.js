function HandOfCards (cards){

}
function Dealer(){

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
    if(hand[0][0] === "Q"){return hand [0][0]}
    return hand[1][0];
}