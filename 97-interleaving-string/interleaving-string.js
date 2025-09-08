var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;

    let memo = {};

    const dfs = (i, j) => {
        if (i === s1.length && j === s2.length) return true;

        let key = i + "|" + j;
        if (key in memo) return memo[key];

        let k = i + j; // position in s3
        let res = false;

        if (i < s1.length && s1[i] === s3[k]) {
            res = dfs(i + 1, j);
        }
        if (!res && j < s2.length && s2[j] === s3[k]) {
            res = dfs(i, j + 1);
        }

        memo[key] = res;
        return res;
    };

    return dfs(0, 0);
};
