function HarshadTester(){
    this.addUpDigits = function(input){
        var inputString = input.toString();
        var AddedDigits = 0;
        for(let i = 0; i < inputString.length; i++){
            AddedDigits += parseInt(inputString[i]);
        };
        return AddedDigits;
    };
    this.isValid = function(input){
        return (input % this.addUpDigits(input) === 0)
    };
    this.getNext = function(i){
        while (i<=2000){
            i++
            if (this.isValid(i)){
                return i;
            }
        };
    };
};