/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let l = 0;
    let max = 0;
    let nZ = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            nZ++;
        }
        while (nZ > k) {
            if (nums[l] == 0) {
                nZ--;
            }
            l++;
        }
        max = Math.max(max, i - l + 1);
    }
    return max;
};