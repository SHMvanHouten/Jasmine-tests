// Remove every second letter from the input string
// The removed letters should be appended to a new string removing it from the old string.
// the letters that are left will be appended to the end of the new string.
// do the encryption n times.
// Examples:
//
//     "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:
//
//     function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
//     If the input-string is null or empty return exactly this value!
//     If n is <= 0 then return the input text.
describe("TextEncrypter", function(){
    beforeEach(function(){
        encrypter = new TextEncrypter();
    })
    it("should return the string with no changes to it if amount of iterations is 0", function(){
        expect(encrypter.getEncodedText("This is a test!", 0)).toEqual("This is a test!");
    })
    it("should return the string with no changes to it if amount of iterations is 0", function(){
        expect(encrypter.getEncodedText("This is also a test!", 0)).toEqual("This is also a test!");
    })

    it("should return the amended string where every second character in the original string was added in sequence", function(){
        expect(encrypter.getEncodedText("This is a test!", 1)).toEqual("hsi  etTi sats!");
    })
    it("should return the amended string 2 times", function(){
        expect(encrypter.getEncodedText("This is a test!", 2)).toEqual("s eT ashi tist!");
    })

})
describe("TextDecrypter", function(){
    beforeEach(function(){
        decrypter = new TextDecrypter();
    });
    it("should return the original text if amount of decryption iterations is 0", function(){
        expect(decrypter.getDecodedText("This is a test!", 0)).toEqual("This is a test!");
    });
    it("should return once decoded text if amount of decryption iterations is 1", function(){
        expect(decrypter.getDecodedText("hsi  etTi sats!", 1)).toEqual("This is a test!");
    });
    it("should return once decoded text if amount of decryption iterations is 2", function(){
        expect(decrypter.getDecodedText("s eT ashi tist!", 2)).toEqual("This is a test!");
    });
    it("should return once decoded text if amount of decryption iterations is 1", function(){
        expect(decrypter.getDecodedText("hskt svr neetn!Ti aai eyitrsig", 1)).toEqual("This kata is very interesting!");
    });


})