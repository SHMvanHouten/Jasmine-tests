describe("Dubstep Decoder", function(){

    it("should remove the first WUB and return ABWubC", function(){
        var decoder1 = new DubstepDecoder();
        expect(decoder1.showDecodedString("AWUBBWUBC")).toEqual("ABWUBC")
    });
    it("should remove the first WUB and return ABWubC", function(){
        var decoder1 = new DubstepDecoder();
        expect(decoder1.showDecodedString("1WUB2WUB3")).toEqual("12WUB3")
    });


});