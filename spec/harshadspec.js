describe("harshad", function(){
    beforeEach(function(){
        test = new HarshadTester();
    });
    it("should be a function",function(){
        expect(typeof test).toEqual("object")
    });
    it("should return the result of the addition of each number", function(){
        expect(test.addUpDigits(15)).toEqual(6);
    });
    it("should return the result of the addition of each number", function(){
        expect(test.addUpDigits(135)).toEqual(9);
    });
    it("should say if the number is a harhad number", function(){
        expect(test.isValid(135)).toBeTruthy();
        expect(test.isValid(134)).toBeFalsy();
    });
    it("should return the next number after given number that is a Harshad number", function(){
        expect(test.getNext(11)).toEqual(12);
        expect(test.getNext(12)).toEqual(18)
    });
    it("should return the next 3 numbers after the input numbers that are Harshad numbers", function(){
        expect(test.getSeries(3,11)).toEqual([12,18,20]);
    });
    it("should return the next 10 numbers after the input numbers that are Harshad numbers", function(){
        expect(test.getSeries(10,0)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42]);
    });

});