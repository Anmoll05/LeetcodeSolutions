/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    let max = 0;
    let rightMax = [];
    rightMax[nums.length - 1] = nums[nums.length - 1];
    for (let i = nums.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], nums[i])
    }
    let l = 0;
    let r = 0;
    while (r < nums.length) {
        while (nums[l] > rightMax[r] && l < r) {
            l++;
        }
        max = Math.max(max, r - l);
        r++;
    }
    return max;
};