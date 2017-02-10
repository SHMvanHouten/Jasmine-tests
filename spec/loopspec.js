describe("loop", function(){

    it("will loop through number countdown 10 down to blastoff!", function(){
        var loop = new Loop();
        expect(loop.giveNumberArray()).toEqual(["Countdown 10",9,8,7,6,5,4,3,2,1,"Blast off!"])
    });

});