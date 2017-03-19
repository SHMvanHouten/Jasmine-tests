
function NextSmallerNumberFinder(){
    this.outputString = "";
    this.getNextSmallestNumber = function(arr){
        arr.reverse();
        for (var i = 0; i<arr.length; i++){
            for (var j = 0; j<i; j++){
                if(arr[j]<arr[i]){
                    var tempArr = arr.splice(j,1);
                    var tempArr2 = arr.splice(0,i).sort().reverse();
                    tempArr = tempArr.concat(tempArr2);
                    return this.outputString += arr.reverse().concat(tempArr).join("");
                }
            }
        }
    };
}
NextSmallerNumberFinder.prototype.getNextSmallerNumber = function(number){
    var sortedNumberArray = number.toString().split("").sort();
    var numberArray = number.toString().split("");
    if (numberArray === sortedNumberArray){return -1}
    this.getNextSmallestNumber(numberArray);
    console.log(this.outputString);
    return Number(this.outputString);
};