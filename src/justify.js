function Justify(){
    var getStringOfSpaces = function(n){
        var string = "";
        for(var i = 0; i<n; i+= 1){
            string += " ";
        }
        return string;
    };


    this.addSpaces = function(lineArray,lineLengthDifference) {
        var numberOfWordsInArray = lineArray.length;
        var extraSpacesAtBeginningOfLine = 0;
        while(lineLengthDifference % (numberOfWordsInArray -1) >0){
            extraSpacesAtBeginningOfLine +=1;
            lineLengthDifference -= 1;
        }
        var amountOfSpacesPerWord = lineLengthDifference/ (numberOfWordsInArray -1);
        var stringOfSpacesToInsert = getStringOfSpaces(amountOfSpacesPerWord);
        var line = lineArray[0];
        for(var i=1; i<numberOfWordsInArray; i += 1){
            if(extraSpacesAtBeginningOfLine > 0){
                line += " ";
                extraSpacesAtBeginningOfLine -= 1;
            }
            line += stringOfSpacesToInsert + lineArray[i];
        }
        return [line];
    };
    this.divideTheTextUpIntoFittingSentencesArray = function(text, length){
        var wordsArray = text.split(" ");
        var fittingSentencesArray = [[wordsArray[0]]];
        var lineLength = wordsArray[0].length;
        var i = 1, j = 0, k=0;
        for(i; i<wordsArray.length; i += 1){
            lineLength += wordsArray[i].length +1;
            // the +1 accounts for the space
            if(lineLength > length){
                fittingSentencesArray.push([wordsArray[i]]);
                lineLength = wordsArray[i].length;
                j++;
            }else{
                fittingSentencesArray[j].push(" " + wordsArray[i]);
            }
        }
        return fittingSentencesArray;
    };
    this.getLengthDifference = function(fittingSentencesArray, length){
        var lengthDifferenceArray = [];
        for(var i = 0; i<fittingSentencesArray.length -1; i +=1){
            var lineLength = fittingSentencesArray[i].join("").length;
            lengthDifferenceArray.push((length) - lineLength);
        }
        return lengthDifferenceArray;
    }
}
// Justify.prototype.getJustifiedText = function(text, length){
//     var fittingSentencesArray = this.divideTheTextUpIntoFittingSentencesArray(text.length);
//
// };
