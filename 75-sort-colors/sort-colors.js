/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // place i at first non zero ele
    // place j at first non 2 ele from back.
    let i,j,k;
    i = 0;
    k = nums.length-1;
    j = 0;
    while (j <= k) {
        //console.log('i',i,'j',j,'k',k, nums)
        if (nums[j] === 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j++;
        }
        else if (nums[j] === 2) {
            [nums[j], nums[k]] = [nums[k], nums[j]];
            k--;
        } else {
            j++;
        }
    }
};