/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans = new Array(nums.length);
    nums.forEach((_,id) => {
        ans[id] = nums[nums[id]]
    });
    return ans;
};