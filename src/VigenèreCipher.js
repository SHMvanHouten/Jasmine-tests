function VigenèreCipher(abc, key){
    this.getEncodedString = function(str){
        strArray = str.split("");
        var outPutString = ""
        var j = 0;
        for (var i = 0; i<str.length; i++){
            charIndex = abc.indexOf(strArray[i]);
            if(charIndex === -1){
                outPutString += strArray[i]
            } else{
                keyIndex = abc.indexOf(key[j]);

                indexForCipheredChar = charIndex + keyIndex;
                if(indexForCipheredChar >= abc.length){indexForCipheredChar -= abc.length;}
                outPutString += abc[indexForCipheredChar];
            }
                j<key.length - 1 ? j++: j=0;
        }
        return outPutString;
    };

    this.getDecodedString = function(str){
        strArray = str.split("");
        var outPutString = ""
        var j = 0;
        for (var i = 0; i<str.length; i++){
            charIndex = abc.indexOf(strArray[i]);
            if(charIndex === -1){
                outPutString += strArray[i]
            } else{
            keyIndex = abc.indexOf(key[j]);
            indexForCipheredChar = charIndex - keyIndex;
            if(indexForCipheredChar <0){indexForCipheredChar += abc.length;}
            outPutString += abc[indexForCipheredChar];
            }
            j<key.length - 1 ? j++: j=0;
        }
        return outPutString;
    };

}