function LongestConsecutiveString(array){
    var lengthsArray = [];
    this.getStringLengths = function(){
        lengthsArray = array.map(function(element){
            return element.length;
        });
    return lengthsArray
    };

    //don't think I can use it.
    this.getHighestStringLength = function(){
        this.getStringLengths();
        return Math.max.apply(null, lengthsArray);
    };
}