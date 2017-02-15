describe("Dubstep Decoder", function(){

    it("should remove the first WUB and return ABWubC", function(){
        var decoder1 = new DubstepDecoder();
        expect(decoder1.showDecodedString("AWUBBWUBC")).toEqual("ABWUBC")
    });

});