function TennisGame() {
    var scorePlayerOne = 0;
    var scorePlayerTwo = 0;
    var tennisScores = ["0","15","30","40"];
    var specialTennisScores1 = ["Deuce","Advantage player1","Win for player1","Win for player1"];
    var specialTennisScores2 = ["Deuce","Advantage player2","Win for player2","Win for player2"];
    var scoreDifference;

    this.addPointPlayerOne = function() {
        return scorePlayerOne ++;
    }
    this.addPointPlayerTwo = function() {
        return scorePlayerTwo ++;
    }

    this.getScorePlayerOne = function getScorePlayerOne() {
        return tennisScores[scorePlayerOne];
    }
    this.getScorePlayerTwo = function getScorePlayerTwo() {
        return tennisScores[scorePlayerTwo];
    }
    this.scoreDifference = function scoreDifference (){
        return (scorePlayerOne - scorePlayerTwo);
    }
    this.tellScore = function tellScore (){
        if ((scorePlayerOne >= 3)||(scorePlayerTwo >=3)){
            if ((scorePlayerOne) >= (scorePlayerTwo)) {
            return specialTennisScores1[this.scoreDifference()];
            }
            else {
            return specialTennisScores2[Math.abs(this.scoreDifference())];
            }
        }
        else {
        return this.getScorePlayerOne() + " - " + this.getScorePlayerTwo();
        }
    }
}

TennisGame.prototype.score = function() {
    return this.tellScore();
};
TennisGame.prototype.addPointPlayerOne = function() {
    return this.addPointPlayerOne;
};
TennisGame.prototype.addPointPlayerTwo = function() {
    return this.addPointPlayerTwo;
};