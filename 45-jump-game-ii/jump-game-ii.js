/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // dp = [0,0,0,0,0]
    // dp = [0,1,1,0,0]
    // dp = [0,1,1,2,2]
    let dp = new Array(nums.length).fill(Infinity);
    dp[0] = 0;
    for (let i = 0 ; i < nums.length; i++) {
        for (let j = i + 1; j <= i + nums[i]; j++) {
            dp[j] = Math.min(dp[j], dp[i] + 1)
        }
        //console.log(dp)
    }
    
    return dp[nums.length - 1]
};