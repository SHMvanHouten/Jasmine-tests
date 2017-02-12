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
    it("should tell you that christmas is 30 days away!", function(){
        var test = new DaysTillChristmas();
        expect(test.getNumberOfDays(25,11)).toEqual("Christmas is 30 days away")
    });
    it("should tell you that christmas is 29 days away!", function(){
        var test = new DaysTillChristmas();
        expect(test.getNumberOfDays(26,11)).toEqual("Christmas is 29 days away")
    });
    it("should tell you that christmas is 60 days away!", function(){
        var test = new DaysTillChristmas();
        expect(test.getNumberOfDays(26,10)).toEqual("Christmas is 60 days away")
    });
    it("should tell you that christmas is 90 days away!", function(){
        var test = new DaysTillChristmas();
        expect(test.getNumberOfDays(26,9)).toEqual("Christmas is 90 days away")
    });
    it("should tell you that christmas is 120 days away!", function(){
        var test = new DaysTillChristmas();
        expect(test.getNumberOfDays(27,8)).toEqual("Christmas is 120 days away")
    });
    it("should tell you that christmas is 316 days away!", function(){
        var test = new DaysTillChristmas();
        expect(test.getNumberOfDays(12,2)).toEqual("Christmas is 316 days away")
    });



});