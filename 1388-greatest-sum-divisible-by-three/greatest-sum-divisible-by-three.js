var maxSumDivThree = function(nums) {
    const n = nums.length;

    // memo[i][rem] = best achievable sum starting at index i with current remainder rem
    let memo = Array.from({ length: n }, () => Array(3).fill(undefined));

    const dfs = (i, rem) => {
        // If we've processed all elements
        if (i === n) {
            // valid only if remainder is 0
            return rem === 0 ? 0 : -Infinity;
        }

        if (memo[i][rem] !== undefined) return memo[i][rem];

        // Option 1: skip nums[i]
        let skip = dfs(i + 1, rem);

        // Option 2: take nums[i]
        let newRem = (rem + nums[i] % 3) % 3;
        let take = nums[i] + dfs(i + 1, newRem);

        return memo[i][rem] = Math.max(skip, take);
    };

    return dfs(0, 0);
};
