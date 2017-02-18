function rowSumOddNumbers(n) {
    var pyramidLevel = [];
    for (var i = 1; i<=n; i++){
        pyramidLevel.push((n * (n - 1))+(i-1)*2 +1);
    };
    
    console.log(n + " makes " + pyramidLevel);
}

rowSumOddNumbers(1)
rowSumOddNumbers(2)
rowSumOddNumbers(3)
rowSumOddNumbers(4)
rowSumOddNumbers(5)
rowSumOddNumbers(6)