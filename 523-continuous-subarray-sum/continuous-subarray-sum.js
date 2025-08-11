/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var checkSubarraySum = function (nums, d) {
    let hash = {};
    hash[0] = -1;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let mod = sum % d;
        if (mod in hash) {
            if(i - hash[mod] > 1) {
                return true;
            }
        } else {
        hash[mod] = i
        }
    }
    return false;
};