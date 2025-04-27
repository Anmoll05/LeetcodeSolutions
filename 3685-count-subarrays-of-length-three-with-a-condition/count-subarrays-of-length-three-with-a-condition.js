/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums) {
    let i = 0;
    let j = 2;
    let c = 0;
    while (j < nums.length) {
        if((nums[i] + nums[j]) == nums[i+1]/2) {
            c++;
        }
        i++;
        j++;
    }
    return c;
};