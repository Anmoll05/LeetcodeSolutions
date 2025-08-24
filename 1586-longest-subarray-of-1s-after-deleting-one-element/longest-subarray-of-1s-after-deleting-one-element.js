/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let i = 0;
    let j = 0;
    let max = 0;
    let had = 0;
    while (j < nums.length) {
        if (nums[j] == 0) { had++ };
        while (had > 1) {
            if (nums[i] == 0) {
                had--;
            }
            i++;
        }
        if (had <= 1) {
            max = Math.max(max, j - i + 1);
        }
        j++;
    }
    return max - 1;
 };