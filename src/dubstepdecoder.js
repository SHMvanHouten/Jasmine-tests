function DubstepDecoder(){

    var replaceForSpace = function replaceForSpace(input){
        return input.replace("WUB" , " ")
    };
    var replaceNoSpace =  function replaceNoSpace(input){
        return input.replace("WUB" , "")
    }

    var replaceTheWub = function replaceTheWub(input){
        var input = input;
        // if ((WUB is on position 0 || WUB has a space in front ) {replace with empty}
        if ((input.indexOf("WUB") === 0) || (input.indexOf(" WUB") !== -1)){
            input = replaceNoSpace(input);
        }
        // else if (last WUB is at the end) && (last WUB is only WUB)
        else if ((input.lastIndexOf("WUB") === (input.length - 3)) && (input.lastIndexOf("WUB"))===(input.indexOf("WUB"))){
            input = replaceNoSpace(input);
        }
        //else if (there is a WUBWUB) && (those are the last WUBs)
        else if (input.lastIndexOf("WUBWUB") === (input.length - 6) && (input.lastIndexOf("WUB") - 3)===(input.indexOf("WUB"))){
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