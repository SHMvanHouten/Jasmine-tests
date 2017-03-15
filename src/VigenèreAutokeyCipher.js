function VigenèreCipher(abc, key){

    var getIndexForCipheredChar = function(charIndex,keyIndex,encodeOrDecode){
        return encodeOrDecode? charIndex - keyIndex: charIndex + keyIndex;
    };

    var correctInvalidIndexForCipheredChar = function(indexForCipheredChar, encodeOrDecode){
        if (encodeOrDecode){
            return indexForCipheredChar <0? indexForCipheredChar += abc.length: indexForCipheredChar;
        }else{
            return indexForCipheredChar >= abc.length? indexForCipheredChar -= abc.length: indexForCipheredChar;
        }

    };

    var getEncodedOrDecodedString = function(str, encodeOrDecode){
        strArray = str.split("");
        var outPutString = ""
        var j = 0;
        var k = 0;
        var strWithoutSpaces = str.split(" ").join("");
        console.log(strWithoutSpaces);
        for (var i = 0; i<str.length; i++){
            charIndex = abc.indexOf(strArray[i]);
            if(charIndex === -1){
                outPutString += strArray[i]
            } else if (j<key.length){
                keyIndex = abc.indexOf(key[j]);
                indexForCipheredChar = getIndexForCipheredChar(charIndex, keyIndex, encodeOrDecode);
                indexForCipheredChar = correctInvalidIndexForCipheredChar(indexForCipheredChar, encodeOrDecode);
                outPutString += abc[indexForCipheredChar];
                j++;
            }
            else{
                var keyIndex = abc.indexOf(strWithoutSpaces[k]);
                while(keyIndex < 0){k++; keyIndex = abc.indexOf(strWithoutSpaces[k])}
                indexForCipheredChar = getIndexForCipheredChar(charIndex, keyIndex, encodeOrDecode);
                indexForCipheredChar = correctInvalidIndexForCipheredChar(indexForCipheredChar, encodeOrDecode);
                outPutString += abc[indexForCipheredChar];
                k++;
            }
        };
        return outPutString;

    }
    this.getEncodedString = function(str){
        return getEncodedOrDecodedString(str, 0);
    };

    this.getDecodedString = function(str){
        return getEncodedOrDecodedString(str,1);
    };

}