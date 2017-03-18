function NextSmallerNumberFinder(){

    var getSortedNumbers = function(numberArray, sortedNumberArray){
        var splicedDigitStore = [];
        while (numberArray[numberArray.length - 1]===sortedNumberArray[sortedNumberArray.length -1]){
            splicedDigitStore.push(numberArray.splice(-1,1));
            sortedNumberArray.splice(-1,1)
        }
        var storedDigitToBePlacedAtTheEnd = numberArray.splice(-2,1);
        numberArray.concat(splicedDigitStore);
        numberArray.push(storedDigitToBePlacedAtTheEnd);
        if (numberArray[0] === 0){return -1}
        else {return Number(numberArray.join(""));}
        
    };

    this.ascertainHowTheNumbersShouldBeOrdered = function(number){
        var sortedNumberArray = number.toString().split("").sort();
        var numberArray = number.toString().split("");
        if (numberArray === sortedNumberArray){return -1}
        return getSortedNumbers(numberArray, sortedNumberArray);
    };

}
NextSmallerNumberFinder.prototype.getNextSmallerNumber = function(inputNumber){
    return this.ascertainHowTheNumbersShouldBeOrdered(inputNumber);
};