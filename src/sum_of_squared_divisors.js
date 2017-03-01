function IntegerFinder(min, max){
    var arrayOfResults = [];
    this.getSumOfSquaredDivisors = function(j){
        var sumOfSquaredDivisors = 0;
        for(i = 1; i<=j; i++){
            if(j%i===0){
                sumOfSquaredDivisors += Math.pow(i, 2);
            }
        }
        return sumOfSquaredDivisors;
    };
    this.getAllIntegersAndTheirSquares= function(){
        for(j=min; j<=max; j++){
            var result = this.getSumOfSquaredDivisors(j);
            if(Number.isInteger(Math.sqrt(result))){
                arrayOfResults.push([j, result])
            }
        };
        return arrayOfResults;
    }
};