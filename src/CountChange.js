function CountChange(){
//    this.getCombination = function getCombination(money,coins){
//        var combination = []
//        while(money>0){
//            combination.push(coins[0]);
//            money -= coins[0];
//        }
//        return combination;
//    };
    var inputMoney;
    var combination = [];
    var combinations = 0;
    this.getPossibleCombination = function getPossibleCombination(money, coins,i){
        if (money === 0 && i>0){
            combinations++;
            getPossibleCombination(inputMoney,coins,i-1);
        }else if (money === 0 && i===0){
            console.log(combinations + " " + coins[i]);
            return combinations++;
        }else if(money - coins<0){
            getPossibleCombination(money, coins, i-1)
        }else{
            getPossibleCombination(money - coins[i],coins, i);
        }
    };
    this.getAmountOfPossibleCombinations = function(money, coins){
        inputMoney = money;
        console.log(coins.length)
        this.getPossibleCombination(money, coins, coins.length-1);
        return combinations;
    };

//    this.getPossibleCombination = function getPossibleCombination(money, coins,i){
//        if (money === 0){
//            combinations++;
//            money += coins[i];
//            i--;
//            getPossibleCombination(money,coins,i);
//            }
//        if (money - coins[i]<0){
//            i--
//            getPossibleCombination(money-coins[i], coins, i)
//        }
//        getPossibleCombination(money - coins[i], coins, i);
//    };
//    this.getCombinations = function(){
//        return combinations;
//    }
};
