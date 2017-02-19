function TextEncrypter(){
    var originalText;
    var originalArray;
    var amendedText = "";
    var amendedTextExtra = "";
    var encodeText = function encodeText(){
        originalArray = originalText.split("");
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
    this.inputText = function inputText(text){
        originalText = text;
    };
    this.getEncodedText = function getEncodedText(){
        encodeText();
        return amendedText;
    };

    this.showOriginalArray = function(){
        encodeText();
        return originalArray;
    }
}
