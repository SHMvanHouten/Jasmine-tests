function BakerHelper(recipe, stock){
    this.getRecipeIngredients = function(){
        return Object.getOwnPropertyNames(recipe);
    };
    this.getStock = function(){
        return Object.getOwnPropertyNames(stock);
    };
}