/**
 * @param {number[][]} moves
 * @return {string}
 */
// var tictactoe = function(moves) {
//     let grid = [];
//     for (let i = 0 ; i < 3; i++) {
//         grid.push([])
//     };
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             grid[i][j] = ' ';
//         }
//     }
//     let turn = 0;
//     for (let move of moves) {
//         if(!turn) {
//             grid[move[0]][move[1]] = 'X'
//         } else {
//             grid[move[0]][move[1]] = 'O'
//         }
//         turn = !turn;
//     }
//     const checkForWinner = (r,c,ch) => {
//         let areRowEqual = true;
//         for (let i = 0; i < 3; i++) {
//             if (grid[r][i] != ch) {
//                 areRowEqual = false;
//             }
//         }
//         let areColEqual = true;
//         for (let i = 0; i < 3; i++) {
//             if (grid[i][c] != ch) {
//                 areColEqual = false;
//             }
//         }
//         let areDiagEqual = true;
//         if (grid[0][0] !== ch || grid[1][1] !== ch || grid[2][2] !== ch) {
//             areDiagEqual = false;
//         }
//         let areDiagsEqual = true;
//         if (grid[2][0] !== ch || grid[1][1] !== ch || grid[0][2] !== ch) {
//             areDiagsEqual = false;
//         }
//         let winner = ' ';
//         if (areDiagEqual || areColEqual || areRowEqual || areDiagsEqual) {
//             winner  = ch == 'X' ? 'A' : 'B'
//         }
//         return winner;
//     }
//     let res = ' ';
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             if(grid[i][j] !== ' ') {
//                 res = checkForWinner(i,j,grid[i][j]);
//                 if (res !== ' ') {
//                     return res;
//                 }
//             }
//         }
//     };
//     return res == ' ' && moves.length == 9 ? "Draw" : "Pending";
// };

var tictactoe = function(moves) {
    const rows = new Array(3).fill(0);
    const cols = new Array(3).fill(0);
    let diag = 0;
    let antiDiag = 0;

    for (let i = 0; i < moves.length; i++) {
        const [r, c] = moves[i];
        
        // Player A = +1, Player B = -1
        const player = i % 2 === 0 ? 1 : -1;

        rows[r] += player;
        cols[c] += player;

        if (r === c) diag += player;
        if (r + c === 2) antiDiag += player;

        if (
            Math.abs(rows[r]) === 3 ||
            Math.abs(cols[c]) === 3 ||
            Math.abs(diag) === 3 ||
            Math.abs(antiDiag) === 3
        ) {
            return player === 1 ? "A" : "B";
        }
    }

    return moves.length === 9 ? "Draw" : "Pending";
};