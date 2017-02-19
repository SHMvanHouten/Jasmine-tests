function TextEncrypter(){
    var originalText;
    var originalArray;
    var amendedText = "";
    var amendedTextExtra = "";
    var encodeText = function encodeText(){
        originalArray = originalText.split("");
        amendedText = ""
        amendedTextExtra = ""
        for (var i = 0; i < originalArray.length; i++){
            if( i % 2 === 0){
                amendedTextExtra += originalArray[i];
            }
            else {
            amendedText += originalArray[i];
            }
        };
        amendedText += amendedTextExtra;
    };
    this.getEncodedText = function getEncodedText(text, amountOfIterations){
        originalText = text;
        for (i = 0; i < amountOfIterations; i++){
            encodeText();
            originalText = amendedText;
        }
        if (amountOfIterations === 0){
            return originalText;
        }
        return amendedText;
    };

};
