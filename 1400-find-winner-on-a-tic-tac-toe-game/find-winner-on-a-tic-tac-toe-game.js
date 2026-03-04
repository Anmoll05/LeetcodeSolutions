/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    let grid = [];
    for (let i = 0 ; i < 3; i++) {
        grid.push([])
    };
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            grid[i][j] = ' ';
        }
    }
    let turn = 0;
    for (let move of moves) {
        if(!turn) {
            grid[move[0]][move[1]] = 'X'
        } else {
            grid[move[0]][move[1]] = 'O'
        }
        turn = !turn;
    }
    const checkForWinner = (r,c,ch) => {
        let areRowEqual = true;
        for (let i = 0; i < 3; i++) {
            if (grid[r][i] != ch) {
                areRowEqual = false;
            }
        }
        let areColEqual = true;
        for (let i = 0; i < 3; i++) {
            if (grid[i][c] != ch) {
                areColEqual = false;
            }
        }
        let areDiagEqual = true;
        if (grid[0][0] !== ch || grid[1][1] !== ch || grid[2][2] !== ch) {
            areDiagEqual = false;
        }
        let areDiagsEqual = true;
        if (grid[2][0] !== ch || grid[1][1] !== ch || grid[0][2] !== ch) {
            areDiagsEqual = false;
        }
        let winner = ' ';
        if (areDiagEqual || areColEqual || areRowEqual || areDiagsEqual) {
            winner  = ch == 'X' ? 'A' : 'B'
        }
        return winner;
    }
    let res = ' ';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(grid[i][j] !== ' ') {
                res = checkForWinner(i,j,grid[i][j]);
                if (res !== ' ') {
                    return res;
                }
            }
        }
    };
    return res == ' ' && moves.length == 9 ? "Draw" : "Pending";
};