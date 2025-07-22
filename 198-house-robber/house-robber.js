/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let memo = {};
    const dfs = (ind) => {
        if (ind == 0) {
            return nums[0];
        }
        if (ind == 1) {
            return Math.max(nums[0], nums[1]);
        }
        if (ind in memo) return memo[ind]
        let take = nums[ind] + dfs(ind - 2);
        let notTake = dfs(ind - 1);
        memo[ind] =  Math.max(take, notTake);
        return Math.max(take, notTake);
    };
    return dfs(nums.length - 1);
};