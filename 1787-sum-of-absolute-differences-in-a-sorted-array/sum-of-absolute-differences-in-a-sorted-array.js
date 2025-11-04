/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
    // Brute force
    // let res = [];
    // for (let i = 0; i < nums.length; i++) {
    //     let s = 0;
    //     for (let j = 0; j < nums.length; j++) {
    //         s += Math.abs(nums[i]-nums[j])
    //     }
    //     res[i] = s
    // }
    // return res;

    let pre = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            pre[i] = nums[i];
        } else {
            pre[i] = nums[i] + pre[i - 1];
        }
    }
    //build suffix array
    let suff = new Array(nums.length);
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i == nums.length - 1) {
            suff[i] = nums[i];
        } else {
            suff[i] = nums[i] + suff[i + 1];
        }
    }
    //now calculate the answer
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        let right = suff[i] - nums[i] * (nums.length - i);
        let left = nums[i] * (i + 1) - pre[i];
        ans.push(left + right);
    }
    return ans;
};