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

    const target = total / 2;

    // Initialize 2D memo array: [nums.length][target + 1]
    const memo = Array.from({ length: nums.length }, () => Array(target + 1).fill(-1));

    const dfs = (i, currSum) => {
        if (currSum > target) return false;
        if (currSum === target) return true;
        if (i >= nums.length) return false;

        if (memo[i][currSum] !== -1) return memo[i][currSum];

        const take = dfs(i + 1, currSum + nums[i]);
        const skip = dfs(i + 1, currSum);

        memo[i][currSum] = take || skip;
        return memo[i][currSum];
    };

    return dfs(0, 0);
};
