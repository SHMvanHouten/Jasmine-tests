function DubstepDecoder(){

    var replaceTheWub = function replaceTheWub(input){
        return input.replace("WUB" , " ")
    };

    this.getDecodedString = function getDecodedString(input){
        input = input
        input = replaceTheWub(input);
        input = replaceTheWub(input);
        return input;
    };
};
DubstepDecoder.prototype.showDecodedString = function showDecodedString(input){
        return this.getDecodedString(input);
    };