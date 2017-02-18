// The goal of this exercise is to convert a string to a new string where each character in the new string is
// '(' if that character appears only once in the original string, or ')' if that character appears more than once
// in the original string. Ignore capitalization when determining if a character is a duplicate.
//
//     Examples:
//
// "din" => "((("
//
// "recede" => "()()()"
//
// "Success" => ")())())"
//
// "(( @" => "))(("
describe("DuplicateCoder", function(){
    it("should code the input into (((", function(){
        coder =new DuplicateCoder("din");
        expect(coder.getCode()).toEqual("(((")

    });
    it("should code the input into ((", function(){
        coder =new DuplicateCoder("de");
        expect(coder.getCode()).toEqual("((")

    });
    it("should code the input into ()", function(){
        coder =new DuplicateCoder("dd");
        expect(coder.getCode()).toEqual("()")

    })

});