describe("Hamming", function(){
    beforeEach(function(){
        hammingFinder = new Hamming();
    })
    describe("getNSmallestNumber", function(){
        it("should determine the first smallest hamming number is 1", function(){
            expect(hammingFinder.getNSmallestHammingNumber(1)).toEqual(1);
        });
        it("should determine the second smallest hamming number is 2", function(){
            expect(hammingFinder.getNSmallestHammingNumber(2)).toEqual(2);
        });
        it("should determine the seventh smallest hamming number is 7", function(){
            expect(hammingFinder.getNSmallestHammingNumber(7)).toEqual(8);
        });
        it("should determine the seventh smallest hamming number is 7", function(){
            expect(hammingFinder.getNSmallestHammingNumber(7)).toEqual(8);
        });
        it("should determine the eight smallest hamming number is 9", function(){
            expect(hammingFinder.getNSmallestHammingNumber(8)).toEqual(9);
        });
    });
    xdescribe("checkIfHighestPrimeFactorIsFive", function(){
        it("should tell that the number 5 has no prime factors higher than 5", function(){
            expect(hammingFinder.checkIfHighestPrimeFactorIsFive(5)).toBeTruthy();
        });
        it("should tell that the number 11 has a prime factor higher than 5", function(){
            expect(hammingFinder.checkIfHighestPrimeFactorIsFive(11)).toBeFalsy();
        });
        it("should tell that the number 22 has a prime factor higher than 5", function(){
            expect(hammingFinder.checkIfHighestPrimeFactorIsFive(22)).toBeFalsy();
        });
        it("should tell that the number 27 has no prime factors higher than 5", function(){
            expect(hammingFinder.checkIfHighestPrimeFactorIsFive(27)).toBeTruthy();
        });


    });




});