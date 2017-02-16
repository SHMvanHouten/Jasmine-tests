function DubstepDecoder(){
    var song;
    var wub = "WUB";
    var wubSlam
    var wubCounter = 0;
    var replaceForSpace = function replaceForSpace(){
        return song = song.replace(wub , " ")
    };
    var replaceNoSpace =  function replaceNoSpace(){
        return song = song.replace(wub , "")
    }
//    var howManyWubs = function(){
//        for (wubCounter = 0; wubCounter < (198/3); wubCounter++){
//            if (wubCounter === song.indexOf(wubSlam)){
//                wubSlam += wub;
//            }
//        }
//    }
//
    var replaceTheWub = function replaceTheWub(){

        // if ((WUB is on position 0 || WUB has a space in front ) {replace with empty}
        if ((song.indexOf(wub) === 0) || (song.indexOf(" " + wub) !== -1)){
            song = replaceNoSpace(song);
        }
        // else if (last WUB is at the end) && (last WUB is only WUB)
        else if ((song.lastIndexOf(wub) === (song.length - 3)) && (song.lastIndexOf(wub))===(song.indexOf(wub))){
            song = replaceNoSpace(song);
        }
        //else if (there is a WUBWUB) && (those are the last WUBs)
        else if (song.lastIndexOf(wub+wub) === (song.length - 6) && (song.lastIndexOf(wub) - 3)===(song.indexOf(wub))){
            song = replaceNoSpace();
        }
        else{
            song = replaceForSpace();
        };
        return song
    };

    this.getDecodedString = function getDecodedString(input){
        song = input
        while(song.indexOf(wub) !== -1){
            song = replaceTheWub();
        };
        while(song.lastIndexOf(" ") === song.length - 1){
            song = song.slice(0, -1)
        }
        return song;
    };
};
DubstepDecoder.prototype.showDecodedString = function showDecodedString(input){
        return this.getDecodedString(input);
    };