describe ("GameofLife", function (){
    beforeEach (function () {
        game = new GameOfLife();
    });

    it ("should start a new game", function(){
        expect (game).toBeTruthy();
    });
    it ("should say the cell is not alive", function(){
        expect (game.isMirrorCellAlive(1,1)).toBeFalsy();
    });
    it ("should say the cell is alive", function(){
        game.markCellAsAlive(2,2);
        expect (game.isCellAlive(2,2)).toBeTruthy();
    });
    it ("should kill a cell", function(){
        game.markCellAsAlive(3,3);
        game.markCellAsDead(3,3)
        expect (game.isCellAlive(3,3)).toBeFalsy();
    });
    it ("should kill a cell with <2 live neighbours", function(){
        game.markCellAsAlive(3,3);
        game.initiateEvolution();
        expect (game.isMirrorCellAlive(3,3)).toBeFalsy();
    });
    it ("should not kill a cell with 2 live neighbours", function(){
        game.markCellAsAlive(3,3);
        game.markCellAsAlive(2,3);
        game.markCellAsAlive(4,3);
        game.initiateEvolution();
        expect (game.isMirrorCellAlive(3,3)).toBeTruthy();
    });
    it ("should kill a cell with 4 or more live neighbours", function(){
        game.markCellAsAlive(3,3);
        game.markCellAsAlive(2,3);
        game.markCellAsAlive(2,4);
        game.markCellAsAlive(2,2);
        game.markCellAsAlive(3,2);
        game.initiateEvolution();
        expect (game.isMirrorCellAlive(3,3)).toBeFalsy();
    });
    it ("should let an empty cell with 3 live neighbours become alive", function(){
        game.markCellAsAlive(2,3);
        game.markCellAsAlive(2,4);
        game.markCellAsAlive(2,2);
        game.initiateEvolution();
        expect (game.isMirrorCellAlive(3,3)).toBeTruthy();
    });
    it ("should create a copy of the grid array and mark target cell as alive", function(){
        game.markCellAsAlive(3,3);
        game.markCellAsAlive(2,3);
        game.markCellAsAlive(2,2);
        game.initiateEvolution();
        expect (game.isMirrorCellAlive(3,3)).toBeTruthy();
    });
    it ("should create a copy of the grid array and mark target cell as dead", function(){
        game.markCellAsAlive(3,3);
        game.markCellAsAlive(2,3);
        game.initiateEvolution();
        expect (game.isMirrorCellAlive(3,3)).toBeFalsy();
    });
    it ("should create a copy of the grid array and mark target cell as alive", function(){
        game.markCellAsAlive(3,4);
        game.markCellAsAlive(5,4);
        game.markCellAsAlive(4,4);
        game.initiateEvolution();
        expect (game.isMirrorCellAlive(4,4)).toBeTruthy();
    });




});