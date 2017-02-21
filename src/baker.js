function BakerHelper(recipe, stock){
    this.getRecipeIngredients = function(){
        return Object.getOwnPropertyNames(recipe);
    };
    this.getStock = function(){
        return Object.getOwnPropertyNames(stock);
    };
    this.checkStockSufficiency =  function(){
        var ingredients = this.getRecipeIngredients();
        var stock = this.getStock();
        var itemCheck;
        for(var i = 0; i < ingredients.length; i++){
            itemCheck = false;
            for(var j = 0; j < stock.length; j++){
                if(stock[j]=== ingredients[i]){itemCheck = true;}
            };
            if(itemCheck === false){return false}
        };
        return true
    };
}