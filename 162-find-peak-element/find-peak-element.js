/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        const mid = Math.floor((l + r )/2);
        if(nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
            return mid;
        } else if(nums[mid] > nums[mid + 1]) {
            r = mid
        } else {
            l = mid + 1;
        }
    }
    return r;
};