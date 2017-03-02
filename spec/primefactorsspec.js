describe("PrimeFactorFinder", function(){
    it("should return a list of the divisors of input number",function(){
        finder = new PrimeFactorFinder();
        expect(finder.getDivisors(12)).toEqual([1,2,3,4,6])
    });
    it("should check if the divisor is prime", function(){
        finder = new PrimeFactorFinder();
        expect(finder.getPrimeDivisors(12)).toEqual([2,3])
    });
    it("should make an array for each time it can be divided by it's prime divisors", function(){
        expect(finder.getPrimeFactors(12)).toEqual([2,2,3])
    });
    it("should make an array for each time it can be divided by it's prime divisors", function(){
        expect(finder.getPrimeFactors(15)).toEqual([3,5])
    });

});