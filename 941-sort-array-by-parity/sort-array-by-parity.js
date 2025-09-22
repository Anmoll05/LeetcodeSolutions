/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let i = 0;
    let j = 0;
    while (j < nums.length) {
        if (nums[j] % 2 == 0) {
            let t = nums[i];
            nums[i] = nums[j];
            i++;
            nums[j] = t;
        }
        j++;
    }
    return nums
};