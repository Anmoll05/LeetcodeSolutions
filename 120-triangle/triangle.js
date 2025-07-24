/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let memo = {};
    const dfs = (i, j) => {
        if(i >= triangle.length) {
            return 0;
        }
        if (j < 0 || j >= triangle[i].length) {
            return Infinity;
        }
        if((i+"|"+j in memo)) return memo[i+"|"+j];
        let f = triangle[i][j] + dfs(i + 1, j);
        let s = triangle[i][j] + dfs(i + 1, j + 1);
        memo[i+"|"+j] = Math.min(f,s);
        return Math.min(f,s);
    };
    return (dfs(0,0));
};