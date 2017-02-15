describe("Dubstep Decoder", function(){

    it("should remove the first WUB and second WUB and return A B C", function(){
        var decoder1 = new DubstepDecoder();
        expect(decoder1.showDecodedString("AWUBBWUBC")).toEqual("A B C")
    });
    it("should remove the firs and second WUB and return A B C", function(){
        var decoder1 = new DubstepDecoder();
        expect(decoder1.showDecodedString("1WUB2WUB3")).toEqual("1 2 3")
    });
    it("should remove the first WUB and second WUB and third WUB and return A B C", function(){
        var decoder1 = new DubstepDecoder();
        expect(decoder1.showDecodedString("1WUB2WUBWUB3")).toEqual("1 2 3")
    });



});