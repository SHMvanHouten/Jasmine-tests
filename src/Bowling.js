function BowlingGame(){
    this.scoreFrame = function(frame){
        if(frame[1] === "/"){return 10}
        return Number(frame[0])+Number(frame[1]);
    };

}
BowlingGame.prototype.getTotalScore = function(scoreSheet){
    totalScore;
    for(var i = scoreSheet.length - 1; i>= 0; i -= 1){

    }
};