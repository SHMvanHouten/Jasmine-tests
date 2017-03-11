function Hamming(){
    var primeFinder = {
     isPrime : function(i){
        for (var j = 2; j<=i/2; j++){
            if(i%j === 0){return false}
        }
        return true
     },
     getFactors : function(n){
         var i = 2;
         var factorsArray = []
         while (i <= n){
             if(n % i === 0 && this.isPrime(i)){
             factorsArray.push(i);
             n = n/i;
             }
             else{i++}
         }
         return factorsArray
     }
    };

    this.checkIfHighestPrimeFactorIsFive = function(n){
        var isBiggerThan5 = function(element, index, array){
            return element>5;
        };
        return !primeFinder.getFactors(n).some(isBiggerThan5);
    };
};

Hamming.prototype.getNSmallestHammingNumber = function getNSmallestHammingNumber(n){
    var hammingIterationCounter = 0
    for(var i = 0; i<n ;i++){
        hammingIterationCounter++
        while(!this.checkIfHighestPrimeFactorIsFive(hammingIterationCounter)){
            hammingIterationCounter++;
        }
    }
    return hammingIterationCounter;
};



