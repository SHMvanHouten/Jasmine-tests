function DubstepDecoder(){
    this.getDecodedString = function getDecodedString(input){
        return input.replace(/(WUB)+/g," ").trim();
    }
};
