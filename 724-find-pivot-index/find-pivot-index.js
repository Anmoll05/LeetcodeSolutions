/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let prefSum = [];
    let suffSum = [];
    prefSum[0] = nums[0];
    for (let i  = 1;  i < nums.length; i++) {
        prefSum[i] = nums[i] + prefSum[i - 1];
    }
    suffSum[nums.length - 1] = nums[nums.length - 1];
    for (let i = suffSum.length - 2; i >= 0; i--) {
        suffSum[i] = nums[i] + suffSum[i + 1];
    }
    let res = -1;
    for (let i = 0; i < nums.length; i++) {
        let pSum = (i - 1) < 0 ? 0 : prefSum[i - 1];
        let sSum = (i + 1) > nums.length - 1 ? 0 : suffSum[i + 1];

        if (pSum == sSum) {
            res = i;
            break;
        }
    }
    return res;
};