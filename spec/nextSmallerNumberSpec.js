// Source: www.codewars.com.
// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.
//
//     For example:
//
// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017

// Return -1 when there is no smaller number that contains the same digits.
// Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.
//
// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
// some tests will include very large numbers.
//     test data only employs positive integers.


describe("NextSmallerNumberFinder", function(){
    it("should return the number 12 for the input of 21 being the next smallest number with the same digits", function(){
        finder = new NextSmallerNumberFinder();
        var number = 21;
        expect(finder.getNextSmallerNumber(number)).toEqual(12);
    });
    it("should return the number 23 for the input of 32 being the next smallest number with the same digits", function(){
        finder = new NextSmallerNumberFinder();
        var number = 32;
        expect(finder.getNextSmallerNumber(number)).toEqual(23);
    });
    it("should return the number 13 for the input of 31 being the next smallest number with the same digits", function(){
        finder = new NextSmallerNumberFinder();
        var number = 31;
        expect(finder.getNextSmallerNumber(number)).toEqual(13);
    });
    it("should return the number 134 for the input of 143 being the next smallest number with the same digits", function(){
        finder = new NextSmallerNumberFinder();
        var number = 143;
        expect(finder.getNextSmallerNumber(number)).toEqual(134);
    });
    it("should return the number 111111111112213 for the input of 111111111112231 being the next smallest number with the same digits", function(){
        finder = new NextSmallerNumberFinder();
        var number = 1111111111131;
        expect(finder.getNextSmallerNumber(number)).toEqual(1111111111113);
    });
    it("should return the number 314 for the input of 341 being the next smallest number with the same digits", function(){
        finder = new NextSmallerNumberFinder();
        var number = 341;
        expect(finder.getNextSmallerNumber(number)).toEqual(314);
    });
    it("should return the number 513 for the input of 531 being the next smallest number with the same digits", function(){
        finder = new NextSmallerNumberFinder();
        var number = 531;
        expect(finder.getNextSmallerNumber(number)).toEqual(513);
    });
    it("should return the number 341 for the input of 413 being the next smallest number with the same digits", function(){
        finder = new NextSmallerNumberFinder();
        var number = 413;
        expect(finder.getNextSmallerNumber(number)).toEqual(341);
    });
    it("should return the number 790 for the input of 907 being the next smallest number with the same digits", function(){
        finder = new NextSmallerNumberFinder();
        var number = 907;
        expect(finder.getNextSmallerNumber(number)).toEqual(790);
    });

    it("should return the number 143 for the input of 314 being the next smallest number with the same digits", function(){
        finder = new NextSmallerNumberFinder();
        var number = 314;
        expect(finder.getNextSmallerNumber(number)).toEqual(143);
    });
    it("should return the number -1 for the input of 709 because 097 is not a valid outcome", function(){
        finder = new NextSmallerNumberFinder();
        var number = 709;
        expect(finder.getNextSmallerNumber(number)).toEqual(-1);
    });





});