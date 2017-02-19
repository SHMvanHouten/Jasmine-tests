//You are given an array array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
//
//Example:
//
//longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
//
//n being the length of the string array, if n = 0 or k > n or k <= 0 return "".


describe("LongestConsecutiveString", function(){
    xit("should return an array with the length of each input (string) element", function(){
        searcher = new LongestConsecutiveString(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"])
        expect(searcher.getStringLengths(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"])).toEqual([4,7,5,4,4,3,5,7]);
    });

    xit("should tell which array is the longest", function(){
        searcher = new LongestConsecutiveString(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"])
        expect(searcher.getHighestStringLength()).toEqual(7);
    });
    xit("should make an array of the sums of each pair of consecutive array lengths", function(){
        searcher = new LongestConsecutiveString(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],2)
        expect(searcher.getStringPairLengths()).toEqual([11,12,9,8,7,8,12]);
    });
    xit("should ascertain which string pair has the highest value", function(){
        searcher = new LongestConsecutiveString(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],2)
        expect(searcher.getHighestStringLength()).toEqual(12);
    });
    it("should locate the first highest pair value", function(){
        searcher = new LongestConsecutiveString(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],2)
        expect(searcher.locateHighestStringLength()).toEqual(1);
    });
    it("should name the first highest pair value", function(){
        searcher = new LongestConsecutiveString(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],2)
        expect(searcher.getNameHighestStringLength()).toEqual("abigailtheta");
    });
    it("should name the first highest trio value", function(){
        searcher = new LongestConsecutiveString(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],3)
        expect(searcher.getNameHighestStringLength()).toEqual("zoneabigailtheta");
    });
    it("should return just /"/" when a false input is given", function(){
        searcher = new LongestConsecutiveString(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],0)
        expect(searcher.getNameHighestStringLength()).toEqual("");
    });


})