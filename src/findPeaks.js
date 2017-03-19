function PeakFinder(){

}
PeakFinder.prototype.getAllPeakLocationsAndHeights = function(landScape){
    var result = {pos:[],peaks:[]};
    for(var i = 0;i<landScape.length;i +=1){
            if(landScape[i]>landScape[i-1]){break;}
    }
    result.pos.push(i);
    result.peaks.push(landScape[i]);
    return result;
};