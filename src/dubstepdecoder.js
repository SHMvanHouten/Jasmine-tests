function DubstepDecoder(){

    var replaceForSpace = function replaceForSpace(input){
        return input.replace("WUB" , " ")
    };
    var replaceNoSpace =  function replaceNoSpace(input){
        return input.replace("WUB" , "")
    }

    var replaceTheWub = function replaceTheWub(input){
        var input = input;
        if(input.indexOf(" WUB") !== -1){
            input = replaceNoSpace(input);
        }
        else{
            input = replaceForSpace(input);
        };
        return input
    };

    this.getDecodedString = function getDecodedString(input){
        var input = input;
        while(input.indexOf("WUB") !== -1){
            input = replaceTheWub(input);
        };

        return input;
    };
};
DubstepDecoder.prototype.showDecodedString = function showDecodedString(input){
        return this.getDecodedString(input);
    };