/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let res = [];
    let s = [1,2,3,4,5,6,7,8,9];
    const dfs = (ind, t, tmp) => {
      if (ind == s.length) {
        if(t == 0 && tmp.length == k) {
            res.push([...tmp])
        }
        return;
      }
      if(t - s[ind] >= 0) {
        dfs(ind + 1, t - s[ind], [...tmp,s[ind]]);
      }
      dfs(ind + 1, t, tmp)
    }
    dfs(0, n, []);
    return (res)
};