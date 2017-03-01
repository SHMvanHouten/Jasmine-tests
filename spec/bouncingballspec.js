//A child plays with a ball on the nth floor of a big building. The height of this floor is known:
//(float parameter "h" in meters, h > 0) .
//He lets out the ball. The ball rebounds for example to two-thirds:
//(float parameter "bounce", 0 < bounce < 1)
//of its height.
//His mother looks out of a window that is 1.5 meters from the ground:
//(float parameters window < h).
//How many times will the mother see the ball either falling or bouncing in front of the window
//(return a positive integer unless conditions are not fulfilled in which case return -1) ?
//Note
//You will admit that the ball can only be seen if the height of the rebouncing ball is stricty greater than the window parameter.
//Example:
//h = 3, bounce = 0.66, window = 1.5, result is 3
//h = 3, bounce = 1, window = 1.5, result is -1.
describe("BouncingBall", function(){
    xit("should return -1 if one of the conditions is not met", function(){
        test = new BouncingBall(3, 1, 1.5);
        expect(test.getResult()).toEqual(-1);
    });
    xit("should return -1 if oneor more of the conditions are not met", function(){
        test = new BouncingBall(0, 0.5, 1.5);
        expect(test.getResult()).toEqual(-1);
    });
    it("should return the number of times a ball appears in front of the window up and down", function(){
        test= new BouncingBall(3, 0.5, 1.5);
        expect(test.getResult()).toEqual(1)
    });

});