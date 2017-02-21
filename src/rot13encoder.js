function Rot13Encoder(message){
    var codesArray = [];
    this.getCodesArray = function(){
//        var a = map.call('Hello World', function(x) {
//          return x.charCodeAt(0);
//        });
        var map = Array.prototype.map;
        codesArray = map.call(message, function(x){
            return x.charCodeAt(0);
        });
    };
    this.showCodesArray = function(){
        this.getCodesArray();
        return codesArray;
    }
};