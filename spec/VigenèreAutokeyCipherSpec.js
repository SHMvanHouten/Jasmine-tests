//this is a continuation and an adaption of the VigenèreCipher kata.

//With the basic Vigenère Cipher, we assume the key is repeated for the length of the text, character by character.
//In this kata, the key is only used once, and then replaced by the decoded text.
//Every encoding and decoding is independent (still using the same key to begin with).
//Unlike the Vigenère Cipher Helper kata, the key index is only incremented if the current letter is in the provided alphabet.

describe("VigenèreAutokeyCipher", function(){
    it("should use the inputString once we've cycled through the password", function(){
        var key = "password";
        var abc = "abcdefghijklmnopqrstuvwxyz";
        cipher = new VigenèreCipher(abc, key);
        expect(cipher.getEncodedString('amazingly few discotheques provide jukeboxes')).toEqual('pmsrebxoy rev lvynmylatcwu dkvzyxi bjbswwaib');
    });
});