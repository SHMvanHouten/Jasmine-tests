function GameOfLife(){
    var theGrid = createArray (15);
    var theGridMirror = createArray (15);
    var amountOfNeighbours = 0;

    function createArray(rows) { //creates a 2 dimensional array of required height
        var arr = [];
        for (var i=0; i<64; i++) {
                arr[i] = [];
               for (var j=0; j<64; j++) {
                arr[i][j] = false;
            }
        }
        return arr;
    }
    this.counAmountOfNeighboursForX0 = function(x,y){
        if(this.isCellAlive(x,y-1))  { amountOfNeighbours++ };
        if(this.isCellAlive(x+1,y-1)){ amountOfNeighbours++ };
        if(this.isCellAlive((x+1),y)){ amountOfNeighbours++ };
        if(this.isCellAlive(x,y+1))  { amountOfNeighbours++ };
        if(this.isCellAlive(x+1,y+1)){ amountOfNeighbours++ };
    };
    this.countAmountOfNeighboursForY0 = function(x,y){
        if(this.isCellAlive(x-1,y))  { amountOfNeighbours++ };
        if(this.isCellAlive(x-1,y+1)){ amountOfNeighbours++ };
        if(this.isCellAlive((x+1),y)){ amountOfNeighbours++ };
        if(this.isCellAlive(x,y+1))  { amountOfNeighbours++ };
        if(this.isCellAlive(x+1,y+1)){ amountOfNeighbours++ };
    };
    this.countAmountOfNeighboursForXAnddY0 = function(x,y){
        if(this.isCellAlive((x+1),y)){ amountOfNeighbours++ };
        if(this.isCellAlive(x,y+1))  { amountOfNeighbours++ };
        if(this.isCellAlive(x+1,y+1)){ amountOfNeighbours++ };
    };
    this.countAmountOfNeighbours = function countAmountOfNeighbours(x,y){
        if(this.isCellAlive(x-1,y))  { amountOfNeighbours++ };
        if(this.isCellAlive(x-1,y+1)){ amountOfNeighbours++ };
        if(this.isCellAlive(x-1,y-1)){ amountOfNeighbours++ };
        if(this.isCellAlive(x,y-1))  { amountOfNeighbours++ };
        if(this.isCellAlive(x+1,y-1)){ amountOfNeighbours++ };
        if(this.isCellAlive((x+1),y)){ amountOfNeighbours++ };
        if(this.isCellAlive(x,y+1))  { amountOfNeighbours++ };
        if(this.isCellAlive(x+1,y+1)){ amountOfNeighbours++ };
    };
    this.getAmountOfNeighbours = function(x,y){
        if(x === 0 && y == 0){
            this.countAmountOfNeighboursForXAnddY0(x,y);
        }
        else if(x === 0){
            this.counAmountOfNeighboursForX0(x,y);
        }
        else if(y === 0){
            this.countAmountOfNeighboursForY0(x,y)
        }
        else{this.countAmountOfNeighbours(x,y)}
    };

    this.checkForUnderPopulation = function (x,y){
        this.getAmountOfNeighbours(x,y);
        if (amountOfNeighbours<2){
            this.markMirrorCellAsDead(x,y);
        }
        amountOfNeighbours = 0;
    };

    this.checkForOverPopulation = function (x,y){
        this.getAmountOfNeighbours(x,y);
        if (amountOfNeighbours>=4){
            this.markMirrorCellAsDead(x,y);
        }
        amountOfNeighbours = 0;
    };

    this.checkForReproduction =  function(x,y){
        this.getAmountOfNeighbours(x,y);
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

    this.processMirrorCells = function(x,y){
        if (this.isCellAlive(x,y)){
        this.markMirrorCellAsAlive(x,y);
        this.checkForOverPopulation(x,y);
        this.checkForUnderPopulation(x,y);
        }
        else {this.checkForReproduction(x,y)};
    };
    this.initiateEvolution = function(){
        this.cycleThroughXY();
    };
    this.cycleThroughXY = function(){
        for(var x=0; x<=15; x++){
            for(var y=0; y<=15; y++){
                this.processMirrorCells(x,y);
            };
        };
    };


};

