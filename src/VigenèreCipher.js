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
        for (var i = 0; i<str.length; i++){
            charIndex = abc.indexOf(strArray[i]);
            if(charIndex === -1){
                outPutString += strArray[i]
            } else{
                keyIndex = abc.indexOf(key[j]);
                indexForCipheredChar = getIndexForCipheredChar(charIndex, keyIndex, encodeOrDecode);
                indexForCipheredChar = correctInvalidIndexForCipheredChar(indexForCipheredChar, encodeOrDecode);
                outPutString += abc[indexForCipheredChar];
            }
            j<key.length - 1 ? j++: j=0;
        }
        return outPutString;
  
    }
    this.getEncodedString = function(str){
        return getEncodedOrDecodedString(str, 0);
    };

    this.getDecodedString = function(str){
        return getEncodedOrDecodedString(str,1);
    };

}