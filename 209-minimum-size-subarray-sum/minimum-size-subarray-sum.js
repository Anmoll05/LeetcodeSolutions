/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let res = nums.length+1;
    let l = 0;
    let s = 0;
    for (let r = 0; r < nums.length; r++) {
        s += nums[r];
        while (s >= target) {
            res = Math.min(res, r - l + 1);
            s -= nums[l];
            l++;
        }
    }
    return res == nums.length + 1 ? 0 : res;
};