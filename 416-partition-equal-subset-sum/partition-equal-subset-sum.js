// var canPartition = function(nums) {
//     const total = nums.reduce((a, b) => a + b, 0);
//     if (total % 2 !== 0) return false;

//     const target = total / 2;
//     const dp = new Array(target + 1).fill(false);
//     dp[0] = true;

//     for (let num of nums) {
//         for (let i = target; i >= num; i--) {
//             dp[i] = dp[i] || dp[i - num];
//         }
//     }

//     return dp[target];
// };

var canPartition = function(nums) {
    
    const total = nums.reduce((a, b) => a + b, 0);
    if (total % 2 !== 0) return false;

    let half = total / 2;
    const memo = Array.from({ length: nums.length }, () => Array(half + 1).fill(-1));
    const dfs = (ind, s) => {
        if (ind >= nums.length) {
            if(s == half) {
                return true;
            } return false;
        }
        if(memo[ind][s] !== -1) return memo[ind][s];
        let lia = dfs(ind + 1, s + nums[ind]);
        let niLia = dfs(ind + 1, s);
        memo[ind][s] = lia || niLia;
        return lia || niLia;
    }
    return dfs(0,0)
};
