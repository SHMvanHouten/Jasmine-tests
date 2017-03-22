function BowlingGame(){
    this.getScoreForFrame = function(frame){
        if(frame[1] === "/"){return 10}
        return Number(frame[0])+Number(frame[1]);
    };

}
BowlingGame.prototype.getTotalScore = function(scoreSheet){
    var totalScore = 0;
    var scoreSheet = scoreSheet.split(" ");
    for(var i = 0; i< scoreSheet.length; i += 1){
        totalScore += this.getScoreForFrame(scoreSheet[i]);
    }
    return totalScore;
};