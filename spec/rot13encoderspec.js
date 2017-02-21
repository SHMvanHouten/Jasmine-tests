describe("Rot13Encoder", function(){
    xit("should return an array of character codes", function(){
        encoder = new Rot13Encoder("test");
        encoder.getNewCodesArray();
        expect(encoder.showCodesArray()).toEqual([116,101,115,116]);
    })
    xit("should return an array of character codes", function(){
        encoder = new Rot13Encoder("testtt");
        encoder.getNewCodesArray();
        expect(encoder.showCodesArray()).toEqual([116,101,115,116,116,116]);
    })
    it("should return an array of +13 character codes for each number in the codesArray", function(){
        encoder = new Rot13Encoder("test");
        encoder.getNewCodesArray();
        expect(encoder.showCodesArray()).toEqual([129,114,128,129]);
    })

});