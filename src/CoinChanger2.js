var coins = [5,10,20,50,100,200];
function coinChanger(price,i){
    if(price<(coins[0] +1)/2)return;
    var subtractedPrice = price - coins[i];
    if (subtractedPrice >= 0){console.log(coins[i] + " piece");return coinChanger(subtractedPrice,i)}
    else {return coinChanger(price,i-1)};
}
coinChanger(214, 5);
