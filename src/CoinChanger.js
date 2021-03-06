function CoinChanger(){

    var amountOfCoins = [];

    this.showNumberOfEachCoin = function (amount){
        for (var i=0;i<this.coins.length;i++){
            amountOfCoins.push(Math.trunc(amount/this.coins[i]));
            amount -= (amountOfCoins[i] * this.coins[i]);
        };
        if(amount!== 0){
            amountOfCoins[this.coins.length - 1] += Math.round(amount/this.coins[this.coins.length - 1]);
        }
        return amountOfCoins;
    };

    this.declareNumberOfCoins = function (){
    var declareArray = [];
        for (var i=0;i<this.coins.length;i++){
            if(amountOfCoins[i]>0){
                declareArray.push(" " + amountOfCoins[i] + " times " + this.coins[i] + " cents");
            }
        }
        return "The coins you require:" + declareArray.toString() + ".";
    }

    this.changeCurrency =  function(currency){
        if(currency === "gulden"){
            return this.coins = [500,250,100,50,25,10,5];
        }
        else if(currency === "euro"){
            return this.coins = [200,100,50,20,10,5,2,1]
        }
        else if(currency === "euroAbove50Cents"){
            return this.coins = [200,100,50]
        }
    };
};

CoinChanger.prototype.showCoins = function (amount){
    return this.showNumberOfEachCoin(amount);
};

CoinChanger.prototype.declareCoins = function (amount){
    this.showNumberOfEachCoin(amount);
    return this.declareNumberOfCoins();
};

CoinChanger.prototype.coins = [200,100,50,20,10,5,2,1];