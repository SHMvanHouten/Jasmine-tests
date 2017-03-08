describe("PrimeFactors", function(){
    it("should find the factors 2 for the input 2", function(){
        finder = new PrimeFactors();
        expect(finder.getFactors(2)).toEqual([2]);
    });
    it("should find the factors 3 for the input 3", function(){
        finder = new PrimeFactors();
        expect(finder.getFactors(3)).toEqual([3]);
    });
    it("should find the factors 2 , 2 for the input 4", function(){
        finder = new PrimeFactors();
        expect(finder.getFactors(4)).toEqual([2,2]);
    });
    it("should find the factors 5 for the input 5", function(){
        finder = new PrimeFactors();
        expect(finder.getFactors(5)).toEqual([5]);
    });
    it("should find the factors 2, 3 for the input 6", function(){
        finder = new PrimeFactors();
        expect(finder.getFactors(6)).toEqual([2,3]);
    });



})