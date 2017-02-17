function GameOfLife(){
    var theGrid = createArray (15);
    var theGridMirror = createArray (15);
    var amountOfNeighbours = 0;

    function createArray(rows) { //creates a 2 dimensional array of required height
        var arr = [];
        for (var i = 0; i < rows; i++) {
            arr[i] = [];
        };
        return arr;
    }
    this.countAmountOfNeighbours = function countAmountOfNeighbours(x,y){
        if(this.isCellAlive(x-1,y-1)){ amountOfNeighbours++ };
        if(this.isCellAlive(x,y-1))  { amountOfNeighbours++ };
        if(this.isCellAlive(x+1,y-1)){ amountOfNeighbours++ };
        if(this.isCellAlive(x-1,y))  { amountOfNeighbours++ };
        if(this.isCellAlive((x+1),y)){ amountOfNeighbours++ };
        if(this.isCellAlive(x-1,y+1)){ amountOfNeighbours++ };
        if(this.isCellAlive(x,y+1))  { amountOfNeighbours++ };
        if(this.isCellAlive(x+1,y+1)){ amountOfNeighbours++ };
    };

    this.checkForUnderPopulation = function (x,y){
        this.countAmountOfNeighbours(x,y);
        if (amountOfNeighbours<2){
            this.markMirrorCellAsDead(x,y);
        }
        amountOfNeighbours = 0;
    };

    this.checkForOverPopulation = function (x,y){
        this.countAmountOfNeighbours(x,y);
        if (amountOfNeighbours>=4){
            this.markMirrorCellAsDead(x,y);
        }
        amountOfNeighbours = 0;
    };

    this.checkForReproduction =  function(x,y){
        this.countAmountOfNeighbours(x,y);
        if (amountOfNeighbours === 3){
            this.markMirrorCellAsAlive(x,y);
        };
        amountOfNeighbours = 0;
    };

    this.isCellAlive = function (x, y){
        return theGrid[x][y];
    };

    this.isMirrorCellAlive = function(x,y){
        return theGridMirror[x][y];
    };

    this.markCellAsAlive = function (x, y){
        theGrid[x][y] = true;
    };
    this.markCellAsDead = function(x, y){
        theGrid[x][y] = false;
    };
    this.markMirrorCellAsAlive = function (x, y){
        theGridMirror[x][y] = true;
    };
    this.markMirrorCellAsDead = function(x, y){
        theGridMirror[x][y] = false;
    };


    this.initiateEvolution = function(){
       if (this.isCellAlive(3,3)){
            this.markMirrorCellAsAlive(3,3);
            this.checkForOverPopulation(3,3);
            this.checkForUnderPopulation(3,3);
       }
       else {this.checkForReproduction(3,3)};
    };
};

