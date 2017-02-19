function LongestConsecutiveString(){
    this.getStringLengths = function(array){
        lengthsArray = array.map(function(element){
            return element.length;
        });
    return lengthsArray
    };
}