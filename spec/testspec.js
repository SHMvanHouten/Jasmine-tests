//Write a JavaScript program to calculate days left until next Christmas
describe("DaysTillChristmas", function(){
    it("will tell you that today is christmas!", function(){
        var test = new DaysTillChristmas();
        expect(test.getNumberOfDays(25,12)).toEqual("It is Christmas Today!")
    });
    it("will tell you that christmas is 1 day away!", function(){
        var test = new DaysTillChristmas();
        expect(test.getNumberOfDays(24,12)).toEqual("Christmas is 1 day away")
    });
    it("will tell you that christmas is 2 days away!", function(){
        var test = new DaysTillChristmas();
        expect(test.getNumberOfDays(23,12)).toEqual("Christmas is 2 days away")
    });
    it("should tell you that christmas is 364 days away!", function(){
        var test = new DaysTillChristmas();
        expect(test.getNumberOfDays(26,12)).toEqual("Christmas is 364 days away")
    });


});