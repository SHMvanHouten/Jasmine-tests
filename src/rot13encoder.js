function Rot13Encoder(message){
    var newCodesArray = []
    this.getNewCodesArray = function(){
        var map = Array.prototype.map;
        newCodesArray = map.call(message, function(x){
            var code = x.charCodeAt(0);
            if( code < 65 || code>91 && code <97 || code >122){}
            else if(code >77 && code <= 91 ||code > 110){code = code -= 13}
            else{code += 13};
            return code;
        });
        return newCodesArray;
    };
    this.getEncodedMessage = function(){
        this.getNewCodesArray();
        return String.fromCharCode(...newCodesArray)
    }
};
