/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function (nums, k) {
    if (k == 0) {
        return new Set(nums).size;
    }
    nums.sort((a, b) => a - b);
    let res = 0;
    let prevMax = -Infinity;
    for (let i = 0; i < nums.length; i++) {
       const lower_bound = nums[i] - k;
       const upper_bound = nums[i] + k;
        if (prevMax < lower_bound) {
            res++;
            prevMax = lower_bound;
        } else if (prevMax < upper_bound) {
            res++;
            prevMax++;
        }
    }
    
    return res;
};