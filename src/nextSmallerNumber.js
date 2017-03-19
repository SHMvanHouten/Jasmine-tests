function NextSmallerNumberFinder(){
    this.outputString = "";
    this.ascertainNextSmallerNumber = function(arr){
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
    var numberArray = number.toString().split("");
    this.ascertainNextSmallerNumber(numberArray);
    if(this.outputString[0] === "0" || !this.outputString){return -1}
    return Number(this.outputString);
};