function VigenèreCipher(abc, key){
    this.getEncodedString = function(str){
        strArray = str.split("");
        var outPutString = ""
        keyIndex = abc.indexOf(key);
        console.log(keyIndex);
        for (var i = 0; i<str.length; i++){
            charIndex = abc.indexOf(strArray[i]);
            outPutString += abc[charIndex + keyIndex];
        }
        return outPutString;
    };

}