function DuplicateCoder(input){
    var outputString = "";
    var letterTracker = [];
    this.findDuplicates = function(letter) {
        if (letterTracker.indexOf(letter)>-1){
            outputString += ")";

        }
        else{
            outputString += "(";
            letterTracker.push(letter);
        }

    };
    this.getCode = function(){
        for(var i = 0; i<input.length; i++){
            this.findDuplicates(input[i]);
        }
    return outputString;
    };
};