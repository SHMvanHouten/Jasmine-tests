function DubstepDecoder(){

    this.getDecodedString = function getDecodedString(input){

        return input.replace("WUB", "");
    };
};
DubstepDecoder.prototype.showDecodedString = function showDecodedString(input){
        return this.getDecodedString(input);
    };