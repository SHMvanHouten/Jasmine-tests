function LongestConsecutiveString(array){
//    var lengthsArray = [];

//    this.getStringLengths = function(){
//        lengthsArray = array.map(function(element){
//            return element.length;
//        });
//    return lengthsArray
//    };

    var stringPairLengths = [];
    this.getStringPairLengths = function(){
        for (var i = 0; i < array.length -1; i++){
            stringPairLengths.push(array[i].length + array[i+1].length);
        }
        return stringPairLengths;
    };

    this.getHighestStringLength = function(){
        this.getStringPairLengths();
        return Math.max.apply(null, stringPairLengths);
    };
    this.locateHighestStringLength = function(){
        return stringPairLengths.indexOf(this.getHighestStringLength());
    };
    this.getNameHighestStringLength = function(){
        return( array[this.locateHighestStringLength()] + array[this.locateHighestStringLength() + 1]);
    };
}