function LongestConsecutiveString(array){
    var lengthsArray = [];
    var stringPairLengths = [];

    this.getStringLengths = function(){
        lengthsArray = array.map(function(element){
            return element.length;
        });
    return lengthsArray
    };

    this.getStringPairLengths = function(){
        this.getStringLengths();
        for (var i = 0; i < lengthsArray.length -1; i++){
            stringPairLengths.push(lengthsArray[i]+ lengthsArray[i+1]);
        }
        return stringPairLengths;
    }

    this.getHighestStringLength = function(){
        this.getStringLengths();
        return Math.max.apply(null, lengthsArray);
    };
}