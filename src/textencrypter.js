function TextEncrypter(){
    var originalText;
    var originalArray;
    var amendedText;
    var encodeText = function encodeText(){
        originalArray = originalText.split("");
        console.log(originalArray)
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
