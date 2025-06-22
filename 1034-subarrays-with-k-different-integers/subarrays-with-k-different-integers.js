/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    const countSubarraysAtleastK = (k) => {
        let i = 0;
        let j = 0;
        let c = 0;
        const map = new Map();
        while (j < nums.length) {
            map.set(nums[j], (map.get(nums[j]) + 1) || 1)
            while(map.size > k) {
                map.set(nums[i], map.get(nums[i]) - 1);
                if (map.get(nums[i]) < 1) {
                    map.delete(nums[i]);
                }
                i++;
            }
            if (map.size <= k) {
                c += j - i + 1;
            }
            j++;
        }
        return c;
    }
    return countSubarraysAtleastK(k) - countSubarraysAtleastK(k - 1);
};