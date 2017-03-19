function PeakFinder(){

}
PeakFinder.prototype.getAllPeakLocationsAndHeights = function(landScape){
    var result = {pos:[],peaks:[]};
    var j =1;
    var closeLoop = false;
    for(var i = 0;i<landScape.length;i +=1){
            if(landScape[i]>landScape[i-1]){
                while(j<landScape.length-i && !closeLoop){
                    if(landScape[i]===landScape[i+j]){
                        j++
                    }
                    else if(landScape[i]<landScape[i+j]){
                        j=1;
                        closeLoop = true;
                    }
                    else{
                        result.pos.push(i);
                        result.peaks.push(landScape[i]);
                        j=1;
                        closeLoop = true;
                    }
                }
                closeLoop = false;
            }
    }
    return result;
};