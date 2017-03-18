function NextSmallerNumberFinder(){
    this.turnTheNumberAround = function(number){
        var turnedAroundNumberArray = number.toString().split("").reverse();
        var turnedAroundNumber = "";
        for (var i = 0; i<turnedAroundNumberArray.length ; i += 1){
            turnedAroundNumber += turnedAroundNumberArray[i];
        }
        return Number(turnedAroundNumber);
    }
}
NextSmallerNumberFinder.prototype.getNextSmallerNumber = function(inputNumber){
    return this.turnTheNumberAround(inputNumber);
};