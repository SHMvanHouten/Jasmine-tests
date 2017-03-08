function PrimeFactors(){
 this.isPrime = function(i){
    for (var j = 2; j<=i/2; j++){
        if(i%j === 0){return false}
    }
    return true
 };
};
PrimeFactors.prototype.getFactors = function(n){
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
};