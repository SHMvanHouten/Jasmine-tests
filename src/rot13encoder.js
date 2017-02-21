function Rot13Encoder(message){
    var newCodesArray = []
    this.getNewCodesArray = function(){
//        var a = map.call('Hello World', function(x) {
//          return x.charCodeAt(0);
//        });
        var map = Array.prototype.map;
        newCodesArray = map.call(message, function(x){
            var code = x.charCodeAt(0);
            return (code + 13);
        });
    };
    this.showCodesArray = function(){

        return newCodesArray;
    }
};