function rowSumOddNumbers(n) {
    var pyramidLevel = [];
    for (var i = 1; i<=n; i++){
        pyramidLevel.push((n * (n - 1))+(i-1)*2 +1);
    };
    var sum = pyramidLevel.reduce(function(acc, val) {
        return acc + val;
    }, 0)
    console.log(n + " gives " + sum)
}

rowSumOddNumbers(1)
rowSumOddNumbers(2)
rowSumOddNumbers(3)
rowSumOddNumbers(4)
rowSumOddNumbers(5)
rowSumOddNumbers(6)