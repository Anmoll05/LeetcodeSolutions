/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    const dfs = (i,j) => {
        if(i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] == ".") return;
        board[i][j] = ".";
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i ,j - 1);
        return;
    };
    let res = 0;
    for(let i = 0 ; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if(board[i][j] == "X") {
                dfs(i,j);
                res++;
            }
        }
    }
    return res;
};