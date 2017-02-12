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

});