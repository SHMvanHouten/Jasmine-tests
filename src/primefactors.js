function PrimeFactorFinder(){
    //obsolete
    this.getDivisors= function(number){
        var divisors = [];
        for(var i=1; i<=number/2; i++){
            if(number%i === 0){divisors.push(i)}
        };
        return divisors;
    };
    var isPrime=function(input){
        for(var j = 2; j <= input/2; j++){
            if(input%j === 0){return false;}
        };
        return true;
    };
    this.getPrimeDivisors = function(number){
    if (isPrime(number)){return [number]}
    var primeDivisors = [];
        for(var i=2; i<=number/2; i++){
            if(number%i === 0 && isPrime(i)){primeDivisors.push(i)}
        };
        return primeDivisors;
    };
    this.getPrimeFactors = function(number){
        var primeFactors = [];
        var primeDivisors = this.getPrimeDivisors(number);
        var i = 0;
        while(number / primeDivisors[i]>=1){
            if (number % primeDivisors[i] ===0){
                primeFactors.push(primeDivisors[i]);
                number /= primeDivisors[i];
            }
            else {i++}
        }

        return primeFactors;
    };
};