function BakerHelper(recipe, stockRoom){
    var ingredients = Object.getOwnPropertyNames(recipe);
    var stock = Object.getOwnPropertyNames(stockRoom);
    var ingredientQuantity = [];
    var stockQuantity = [];

    Object.getOwnPropertyNames(recipe).forEach(function(val, idx, array) {
        ingredientQuantity.push(recipe[val]);
    });
    Object.getOwnPropertyNames(stockRoom).forEach(function(val, idx, array) {
        stockQuantity.push(stockRoom[val]);
    });


    this.amountOfCakesPossible =  function(){
        var cakeAmountsPossible = null;
        var itemCheck;
        for(var i = 0; i < ingredients.length; i++){
            itemCheck = false;
            for(var j = 0; j < stock.length; j++){

                var stockAvailable = Math.floor(stockQuantity[j] / ingredientQuantity[i]);
                console.log("stock: " + stockQuantity[j] + stock[j] + " ingredients: " + ingredientQuantity[i] + ingredients[i] );
                if(stock[j]=== ingredients[i]){
                    itemCheck = true;
                    if (cakeAmountsPossible === null || stockAvailable < cakeAmountsPossible ){
                        cakeAmountsPossible = stockAvailable;
                    }
                }
            };
            if(itemCheck === false){return cakeAmountsPossible = 0;}
        };
        if (cakeAmountsPossible === -1){cakeAmountsPossible = 0}
        return cakeAmountsPossible;
    };

}