//The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
//
//What if the string is empty ? Then the result should be empty object literal { }


describe("CharacterCounter", function(){
    it("should return the amount of a's that is in the string", function(){
        counter = new CharacterCounter("a pie in an abba sky");
        expect(counter.getAmountOfAs()).toEqual(4);
    });
    it("should return the amount of letters that is in the string", function(){
        counter = new CharacterCounter("a pie in an abba sky");
        expect(counter.getAmountOfLetters()).toEqual(15);
    });
    it("should return the number of each letter in an object", function(){
        counter = new CharacterCounter("a pie");
        expect(counter.getLetterAmountObject()).toEqual({a:1,e:1,i:1,p:1})
    });

});