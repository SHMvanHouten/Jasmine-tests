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
        encrypter = new TextEncrypter;
    })
    xit("should return the string witb no changes to it", function(){
        encrypter.inputText("This is a test!");
        expect(encrypter.getEncodedText()).toEqual("This is a test!");
    })
    xit("should return the string witb no changes to it", function(){
        encrypter.inputText("This is also a test!");
        expect(encrypter.getEncodedText()).toEqual("This is also a test!");
    })
    it("should return the string as an array", function(){
        encrypter.inputText("This is also a test!");
        expect(encrypter.showOriginalArray()).toEqual(["T", "h", "i", "s", " ", "i", "s", " ", "a", "l", "s", "o", " ", "a", " ", "t", "e", "s", "t", "!"]);
    })

    it("should return the amended string where every second character in the original string was added in sequence", function(){
        encrypter.inputText("This is a test!");
        expect(encrypter.getEncodedText()).toEqual("hsi  etTi sats!");
    })

})