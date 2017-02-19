function LongestConsecutiveString(array, k){
//    var lengthsArray = [];

//    this.getStringLengths = function(){
//        lengthsArray = array.map(function(element){
//            return element.length;
//        });
//    return lengthsArray
//    };

    var stringPairLengths = [];

    this.getStringPairLengths = function(){
        for (var i = 0; i < array.length -(k-1); i++){
            var lengths = 0
            for(var j = 0; j<k; j++ ){
                lengths +=(array[i+j].length);
            }
            stringPairLengths.push(lengths)
        }
        return stringPairLengths;
    };

    this.getHighestStringLength = function(){
        this.getStringPairLengths();
        return Math.max.apply(null, stringPairLengths);
    };
    this.locateHighestStringLength = function(){
        console.log(stringPairLengths.indexOf(this.getHighestStringLength()))
        return stringPairLengths.indexOf(this.getHighestStringLength());
    };
    this.getNameHighestStringLength = function(){
        var name = "";
        for (var i = 0; i< k; i++){
            name += array[this.locateHighestStringLength() + i];
        };
        return name;
    };
}