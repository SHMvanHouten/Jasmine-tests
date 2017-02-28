describe("TowerBuilder", function(){
    it("should be a function", function(){
        expect(typeof TowerBuilder).toEqual("function")
    });
    it("should return an array with a *", function(){
        builder = new TowerBuilder(1);
        expect(builder.getArray()).toEqual(["*"])
    });
    it("should return an array with a ' * ', '***' ", function(){
        builder = new TowerBuilder(2);
        expect(builder.getArray()).toEqual([" * ","***"])
    });

});