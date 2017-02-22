//The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches,
//restrict your output to the first 5 results. If there are no matches, return an empty array.
//
//Example:
//
//autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']
//For this kata, the dictionary will always be a valid array of strings. Please return all results in the order given in the dictionary, even if they're not always alphabetical.
//The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.
//
//For example, "Apple" and "airport" would both return for an input of 'a'. However, they should return as "Apple" and "airport" in their original cases.
//
//Important note:
//
//Any input that is NOT a letter should be treated as if it is not there. For example, an input of "$%^" should be treated as "" and an input of "ab*&1cd" should be treated as "abcd".
describe("Autocomplete", function(){
    xit("should find matches for the combination of symbols in the array", function(){
        autocompleter = new Autocomplete('ai', ['airplane','airport','apple','ball']);
        expect(autocompleter.getMatches()).toEqual(['airplane', 'airport']);
    });
    xit("should ignore the input of anything that is not a letter", function(){
        autocompleter = new Autocomplete('2#ai9$:.', ['airplane','airport','apple','ball']);
        expect(autocompleter.getMatches()).toEqual(['airplane', 'airport']);
    });
    it("should ignore only return the results that start with the input letters", function(){
        autocompleter = new Autocomplete('2#ai9$:.', ['airplane','airport','apple','ball', 'hair', 'fair', 'fairy']);
        expect(autocompleter.getMatches()).toEqual(['airplane', 'airport']);
    });
    it("should only return the first five matches", function(){
        autocompleter = new Autocomplete('2#a9$:.', ['airplane','airport','apple','all', 'hair', 'air', 'fairy', 'agnostic', 'anti', 'ant']);
        expect(autocompleter.getMatches()).toEqual(['airplane', 'airport', 'apple', 'all', 'air']);
    });
    it("should only return the matches including the dictionary items with symbols and capital letters", function(){
        autocompleter = new Autocomplete('2#z9$:.', ['Zeus', 'Zelda', 'zap-machine']);
        expect(autocompleter.getMatches()).toEqual(['Zeus', 'Zelda', 'zap-machine']);
    });


})