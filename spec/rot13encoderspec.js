//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//
//Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are.
//Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

describe("Rot13Encoder", function(){
    xit("should return an array of character codes", function(){
        encoder = new Rot13Encoder("test");
        encoder.getNewCodesArray();
        expect(encoder.showCodesArray()).toEqual([116,101,115,116]);
    });
    xit("should return an array of character codes", function(){
        encoder = new Rot13Encoder("testtt");
        encoder.getNewCodesArray();
        expect(encoder.showCodesArray()).toEqual([116,101,115,116,116,116]);
    });
    it("should return an array of +/-13 character codes for each number in the codesArray depending if they are over or under half of the alphabet", function(){
        encoder = new Rot13Encoder("test");
        encoder.getNewCodesArray();
        expect(encoder.getNewCodesArray()).toEqual([103,114,102,103]);
    });
    it("should not change any character that is not a roman letter", function(){
        encoder = new Rot13Encoder("test~");
        encoder.getNewCodesArray();
        expect(encoder.getNewCodesArray()).toEqual([103,114,102,103,126]);
    });
    it("should return the code back to text.", function(){
        encoder = new Rot13Encoder("test~");
        encoder.getNewCodesArray();
        expect(encoder.getEncodedMessage()).toEqual("grfg~");
    });
    it("should return the code back to text also for capital letters and all types of symbols.", function(){
        encoder = new Rot13Encoder("@TESt_~");
        encoder.getNewCodesArray();
        expect(encoder.getEncodedMessage()).toEqual("@GRFg_~");
    });


});