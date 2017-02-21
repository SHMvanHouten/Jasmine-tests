function BakerHelper(recipe, stock){
    this.getRecipeIngredients = function(){
        return Object.getOwnPropertyNames(recipe)
    };
}