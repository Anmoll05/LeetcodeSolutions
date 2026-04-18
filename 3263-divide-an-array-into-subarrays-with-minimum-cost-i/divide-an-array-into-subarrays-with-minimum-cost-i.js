/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    
    let f = nums[0];
    let s = Infinity;
    let t = Infinity;
    let si = null;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < s) {
            s = nums[i];
            si = i;
        }
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] >= s && nums[i] < t && i !== si) {
            t = nums[i]
        }
    }
    return f + s + t;
};