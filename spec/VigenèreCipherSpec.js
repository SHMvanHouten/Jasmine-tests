// Assume the key is repeated for the length of the text, character by character.
// Note that some implementations repeat the key over characters only if they are part of the alphabet, and that is not the case here.
//
// The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.

describe("VigenèreCipher", function(){
    describe("encode", function(){
        it("should return a string up one index point for the password b, from 'testing' to 'uftujoh'", function(){
            var key = "b";
            var abc = "abcdefghijklmnopqrstuvwxyz";
            cipher = new VigenèreCipher(abc, key);
            expect(cipher.getEncodedString("testing")).toEqual("uftujoh");
        });
        it("should return a string up one index point for the password c, from 'testing' to 'uftujoh'", function(){
            var key = "c";
            var abc = "abcdefghijklmnopqrstuvwxyz";
            cipher = new VigenèreCipher(abc, key);
            expect(cipher.getEncodedString("testing")).toEqual("vguvkpi");
        });
        it("should return a string up one index point for the password c, from 'zark' to 'bctm'", function(){
            var key = "c";
            var abc = "abcdefghijklmnopqrstuvwxyz";
            cipher = new VigenèreCipher(abc, key);
            expect(cipher.getEncodedString('zark')).toEqual('bctm');
        });
        it("should return a string up one index point for the password ca, from 'zark' to 'bctm'", function(){
            var key = "ca";
            var abc = "abcdefghijklmnopqrstuvwxyz";
            cipher = new VigenèreCipher(abc, key);
            expect(cipher.getEncodedString('zark')).toEqual('batk');
        });

    });

});