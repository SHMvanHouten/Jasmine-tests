function TextEncrypter(){

    var originalText;
    var amendedText;
    var amendedTextSurplus;

    var encodeText = function encodeText(){
        var originalArray = originalText.split("");
        amendedText = ""
        amendedTextSurplus = ""
        for (var i = 0; i < originalArray.length; i++){
            if( i % 2 === 0){
                amendedTextSurplus += originalArray[i];
            }
            else {
            amendedText += originalArray[i];
            }
        };
        amendedText += amendedTextSurplus;
    };

    this.getEncodedText = function getEncodedText(text, amountOfIterations){
        if (amountOfIterations === 0){
            return text;
        }
        originalText = text;
        for (i = 0; i < amountOfIterations; i++){
            encodeText();
            originalText = amendedText;
        }
        return amendedText;
    };

};
