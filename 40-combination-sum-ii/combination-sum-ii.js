/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (arr, target) {
    arr.sort((a, b) => a - b);
    let res = [];
    const dfs = (i, t, tmp) => {
        if (i >= arr.length) {
            if (t == 0) {
                res.push([...tmp]);
            }
            return;
        }

        if (t - arr[i] >= 0) {
            dfs(i + 1, t - arr[i], [...tmp, arr[i]]);
            while(i < arr.length - 1 && arr[i] == arr[i + 1]) i++;
        }
        dfs(i + 1, t, tmp);
    };
    dfs(0, target, []);
    return res;
};