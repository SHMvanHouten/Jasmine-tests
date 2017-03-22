describe("bowlingGame", function(){
    xdescribe("getTotalScore",function(){
        it("should give a total score 169 of for the input string 'X X 9/ 80 X X 90 8/ 7/ 44' ", function(){
            var game = new BowlingGame();
            var scoreSheet = 'X X 9/ 80 X X 90 8/ 7/ 44';
            expect(game.getTotalScore(scoreSheet)).toEqual(169);
        });
    });
    xdescribe("getScoreForFrame", function() {
        it("should give a score of 8 for the input of '71'", function() {
            var game = new BowlingGame();
            var frame = "71";
            expect(game.getScoreForFrame(frame)).toEqual(8);
        });
        it("should give a score of 9 for the input of '90'", function() {
            var game = new BowlingGame();
            var frame = "90";
            expect(game.getScoreForFrame(frame)).toEqual(9);
        });
        it("should give a score of 10 for the input of '9/'", function() {
            var game = new BowlingGame();
            var frame = "9/";
            expect(game.getScoreForFrame(frame)).toEqual(10);
        });
    });
    describe("getTotalScore", function() {
        it("should return a total score of 91 for the input'90 90 90 90 9/ 90 90 90 90 90'  ", function() {
            var game = new BowlingGame();
            var scoreSheet = '90 90 90 90 9/ 90 90 90 90 90';
            expect(game.getTotalScore(scoreSheet)).toEqual(91);
        });
        it("should return a total score of 91 for the input'90 90 90 90 9/ 90 90 90 90 90'  ", function() {
            var game = new BowlingGame();
            var scoreSheet = '90 90 90 90 9/ 90 90 90 90 90';
            expect(game.getTotalScore(scoreSheet)).toEqual(91);
        });
        
    });
});