/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let res = 1;
    let max = 1;
    for (let i = 1 ; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            res += 1;
        } else {
            res = 1;
        }
        max= Math.max(res,max);
    }
    return max;
};