function DubstepDecoder(){

    var replaceForSpace = function replaceForSpace(input){
        return input.replace("WUB" , " ")
    };
    var replaceNoSpace =  function replaceNoSpace(input){
        return input.replace("WUB" , "")
    }

    var replaceTheWub = function replaceTheWub(input){
        var input = input;
        // if ((WUB is on position 0 || WUB has a space in front || WUB is at the end {replace with empty}
        if ((input.indexOf("WUB") === 0) || (input.indexOf(" WUB") !== -1) || (input.indexOf("WUB") === (input.length - 3))){
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