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
    
});