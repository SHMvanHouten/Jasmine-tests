function DuplicateCoder(input){
    var input = input.toLowerCase();
    var outputString = "";
    this.findDuplicates = function(letter) {
        if (input.indexOf(letter)===input.lastIndexOf(letter)){
            outputString += "(";

        }
        else{
            outputString += ")";
        }

    };
    this.getCode = function(){
        for(var i = 0; i<input.length; i++){
            this.findDuplicates(input[i]);
        }
    return outputString;
    };
};