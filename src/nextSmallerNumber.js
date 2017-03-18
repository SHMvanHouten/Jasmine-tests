function NextSmallerNumberFinder(){
    this.ascertainHowTheNumbersShouldBeOrdered = function(number){
        var numberArray = number.toString().split("");
        var sortedNumberArray = number.toString().split("").sort();
        // if numberArray is already the smallest number, return -1;
        if (numberArray === sortedNumberArray){return -1}
        var outputNumberString = "";
        while (numberArray[0]===sortedNumberArray[0]){
            outputNumberString += numberArray.splice(0,1);
            sortedNumberArray.splice(0,1)
        }
        var indexOfSecondHighestDigitLeft = sortedNumberArray.indexOf(numberArray[0]) - 1;
        outputNumberString += sortedNumberArray.splice(indexOfSecondHighestDigitLeft,1);
        outputNumberString += sortedNumberArray.reverse().join("");
        return Number(outputNumberString);
    };

}
NextSmallerNumberFinder.prototype.getNextSmallerNumber = function(inputNumber){
    return this.ascertainHowTheNumbersShouldBeOrdered(inputNumber);
};