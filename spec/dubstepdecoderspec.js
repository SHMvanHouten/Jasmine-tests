describe("Dubstep Decoder", function(){

    it("should remove the first WUB and second WUB and return A B C", function(){
        var decoder1 = new DubstepDecoder();
        expect(decoder1.getDecodedString("AWUBBWUBC")).toEqual("A B C")
    });
    it("should remove the firs and second WUB and return A B C", function(){
        var decoder1 = new DubstepDecoder();
        expect(decoder1.getDecodedString("1WUB2WUB3")).toEqual("1 2 3")
    });
    it("should remove the first WUB and second WUB and third WUB and return A B C", function(){
        var decoder1 = new DubstepDecoder();
        expect(decoder1.getDecodedString("1WUB2WUBWUB3")).toEqual("1 2 3")
    });
    it("should remove all the WUBS and return A B C", function(){
        var decoder1 = new DubstepDecoder();
        expect(decoder1.getDecodedString("AWUBWUBWUBBWUBWUBWUBC")).toEqual("A B C")
    });
    it("should remove all the WUBS and return A B C", function(){
        var decoder1 = new DubstepDecoder();
        expect(decoder1.getDecodedString("WUBAWUBBWUBCWUB")).toEqual("A B C")
    });
    it("should remove all the WUBS and return A B C", function(){
        var decoder1 = new DubstepDecoder();
        expect(decoder1.getDecodedString("WUBAWUBBWUBCWUBWUBWUB")).toEqual("A B C")
    });



});