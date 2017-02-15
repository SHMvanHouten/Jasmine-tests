function CoinChanger(){
    var coins = [100,50,20,10,5,2,1];
    var amountOfCoins = [];

    this.showNumberOfCoins = function (amount){
        for (var i=0;i<coins.length;i++){
            amountOfCoins.push(Math.trunc(amount/(coins[i])));
            amount -= (amountOfCoins[i] * coins[i]);
        };
        return amountOfCoins;
    };

    this.declareNumberOfCoins = function (){
    var declareArray = [];
        for (var i=0;i<coins.length;i++){
            if(amountOfCoins[i]>0){
                declareArray.push(" " + amountOfCoins[i] + " times " + coins[i] + " cents");
            }
        }
        return "The coins you require:" + declareArray.toString() + ".";
    }
};

CoinChanger.prototype.showCoins = function (amount){
    return this.showNumberOfCoins(amount);
};

CoinChanger.prototype.declareCoins = function (amount){
    this.showNumberOfCoins(amount);
    return this.declareNumberOfCoins();

};