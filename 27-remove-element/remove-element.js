/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0;
    let j = nums.length - 1;
    while (j >= 0 && nums[j] == val) {
        j--;
    }
    while (i < j) {
        if (nums[i] == val) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++;
            while (j >= 0 && nums[j] == val) {
                j--;
            }
        } else {
            i++;
        }
    }
    return j < 0 ? 0 : j + 1;
};