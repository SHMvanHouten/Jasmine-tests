function Rot13Encoder(message){
    var newCodesArray = []
    this.getNewCodesArray = function(){
//        var a = map.call('Hello World', function(x) {
//          return x.charCodeAt(0);
//        });
        var map = Array.prototype.map;
        newCodesArray = map.call(message, function(x){
            var code = x.charCodeAt(0);
            if( code > 78 && code <= 91 ||code > 110){code -= 13 }
            else{code += 13};
            return code;
        });
    };
    this.showCodesArray = function(){

        return newCodesArray;
    }
};