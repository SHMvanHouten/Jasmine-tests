function Justify(){
    this.addSpace = function(inputString) {
        return inputString.replace(/\s/,"  ");
    };
    this.divideTheTextUpIntoFittingSentencesArray = function(text, length){
        var wordsArray = text.split(" ");
        var fittingSentencesArray = [wordsArray[0]];
        var i = 1, j = 0;
        for(i; i<wordsArray.length; i += 1){
            // the +1 accounts for the space
            if(fittingSentencesArray[j].length + wordsArray[i].length +1 > length){
                fittingSentencesArray[j] += "\n";
                fittingSentencesArray.push(wordsArray[i]);
                j++;
            }else{
                fittingSentencesArray[j] += " " + wordsArray[i]
            }
        }
        return fittingSentencesArray;
    }
}