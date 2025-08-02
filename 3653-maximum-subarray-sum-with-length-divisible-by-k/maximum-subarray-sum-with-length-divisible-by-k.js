var maxSubarraySum = function(nums, k) {
    let n = nums.length;
    let prefixSum = 0;
    let res = -Infinity;

    // dp[mod] = smallest prefix sum seen so far for that mod
    let dp = new Array(k).fill(Infinity);
    dp[0] = 0;

    for (let i = 0; i < n; i++) {
        prefixSum += nums[i];
        let mod = (i + 1) % k;

        if (dp[mod] !== Infinity) {
            res = Math.max(res, prefixSum - dp[mod]);
        }

        // update dp with min prefix sum for this mod
        dp[mod] = Math.min(dp[mod], prefixSum);
    }

    return res;
};
