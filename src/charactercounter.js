function CharacterCounter(string){
    this.getAmountOfAs = function(){
        return string.match(/[a]/g).length;
    };
    this.getAmountOfLetters = function(){
        return string.match(/[a-z]/g).length;
    }
    this.getLetterAmountObject = function(){
        var letterAmountObject ={};
        arr = string.match(/[a-z]/g).sort();
        arr.forEach(function(element){
            if(letterAmountObject[element]>0){
                letterAmountObject[element]++;
            }
            else{letterAmountObject[element] = 1}
        })
        return letterAmountObject;
    };
};