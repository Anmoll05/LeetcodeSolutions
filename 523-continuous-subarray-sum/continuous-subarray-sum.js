/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var checkSubarraySum = function (nums, d) {
    const calculateMod = (sum, k) => {
        return ((sum % k) + k) % k;
    }

    var subarraysDivByK = function (nums, k) {
        let total = 0;
        let obj = {};
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            let p = calculateMod(sum, k);
            if (p == 0) total += 1;

            if (p in obj) {
                total += obj[p];
            }
            obj[p] = ++obj[p] || 1;
        }
        return total;
    };
    let totalValidSubarrays = subarraysDivByK(nums, d);
    let cnt = 0;
    nums.forEach((e) => {
        if ((e % d) == 0) {
            cnt++;
        }
    });
    return totalValidSubarrays - cnt > 0 ? true : false;
};