describe("Rot13Encoder", function(){
    it("should return an array of character codes", function(){
        encoder = new Rot13Encoder("test");
        expect(encoder.showCodesArray()).toEqual([116,101,115,116]);
    })
});