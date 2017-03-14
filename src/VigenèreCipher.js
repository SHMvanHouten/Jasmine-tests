function VigenèreCipher(abc, key){
    this.getEncodedString = function(str){
        strArray = str.split("");
        var outPutString = ""
        keyIndex = abc.indexOf(key);
        for (var i = 0; i<str.length; i++){
            charIndex = abc.indexOf(strArray[i]);
            indexForCipheredChar = charIndex + keyIndex;
            if(indexForCipheredChar >= abc.length){indexForCipheredChar -= abc.length;}
            outPutString += abc[indexForCipheredChar];
        }
        return outPutString;
    };

}