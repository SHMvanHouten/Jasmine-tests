//Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764.
//The sum of the squared divisors is 2500 which is 50 * 50, a square!
//
//Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.
//
//The result will be an array of arrays(in C an array of Pair), each subarray having two elements,
//first the number whose squared divisors is a square and then the sum of the squared divisors.
//
//Examples:
//
//list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
//list_squared(42, 250) --> [[42, 2500], [246, 84100]]

describe("IntegerFinder", function(){
    it("should return the sum of all the divisors between 1 and 42, squared", function(){
        finder = new IntegerFinder(1,42);
        expect(finder.getSumOfSquaredDivisors(42)).toEqual(2500);
    })
    it("should return all the integers where the sum of divisors squared is itself a square, and the value that square", function(){
        finder = new IntegerFinder(1, 250);
        expect(finder.getAllIntegersAndTheirSquares()).toEqual([[1,1],[42, 2500], [246, 84100]]);
    })

});