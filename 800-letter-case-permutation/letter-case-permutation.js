/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let res = [];
    let i = 0;
    let arr = s.split("");
    const dfs = (ind, tmp) => {
        console.log(ind, tmp)
        if (ind >= s.length) {
            res.push(tmp.join(""));
            return;
        }
        if (arr[ind].charCodeAt() >= 65 && arr[ind].charCodeAt() <= 90) {
            tmp[ind] = arr[ind].toLowerCase();
            dfs(ind + 1, tmp);
            tmp[ind] = arr[ind];
            dfs(ind + 1, tmp);
        } 
        else if (arr[ind].charCodeAt() >= 97 && arr[ind].charCodeAt() <= 122) {
            tmp[ind] = arr[ind].toUpperCase();
            dfs(ind + 1, tmp);
            tmp[ind] = arr[ind];
            dfs(ind + 1, tmp);
        } else {
            tmp[ind] = arr[ind];
            dfs(ind + 1, tmp);
        }
        return;
    }
    dfs(0, []);
    return res;
};