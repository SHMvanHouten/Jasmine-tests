//You are given an array array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
//
//Example:
//
//longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
//
//n being the length of the string array, if n = 0 or k > n or k <= 0 return "".


describe("LongestConsecutiveString", function(){
    beforeEach(function(){
        searcher = new LongestConsecutiveString();
    });
    it("should return an array with the length of each input (string) element", function(){
        expect(searcher.getStringLengths(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"])).toEqual([4,7,5,4,4,3,5,7]);
    });
})