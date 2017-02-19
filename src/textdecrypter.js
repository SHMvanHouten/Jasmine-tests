function TextDecrypter(){
    var encryptedText;
    var amendedText;

    var decryptText = function decryptText(){
        amendedText = ""
        var firstHalfOfSlicedText = encryptedText.slice(0, encryptedText.length/2);
        var secondHalfOfSlicedText = encryptedText.slice(encryptedText.length/2);
        var firstHalfOfSlicedTextLength = firstHalfOfSlicedText.length
        var secondHalfOfSlicedTextLength = secondHalfOfSlicedText.length;
        for(var i = 0; i<firstHalfOfSlicedTextLength; i++){
            amendedText += secondHalfOfSlicedText[i];
            amendedText += firstHalfOfSlicedText[i];
        }
        if(secondHalfOfSlicedTextLength>firstHalfOfSlicedTextLength){
            amendedText += secondHalfOfSlicedText[secondHalfOfSlicedTextLength - 1]
        }
    }

    this.getDecodedText =  function(text,amountOfIterations){
        if(amountOfIterations<=0){
            return text;
        };
        encryptedText = text;
        for(var i = 0; i<amountOfIterations; i++){
        decryptText();
        encryptedText = amendedText;
        }
        return amendedText

    }
}