/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const maxEle = Math.max(...nums);
    if (k > nums.length) return 0;
    let res = 0;
    let i = 0;
    let countMax = 0;
    const n = nums.length;
    //let j = i + k - 1;
    for (let j = 0; j < nums.length; j++) {
        if(nums[j] == maxEle) {
            countMax++;
        }
        while(countMax >= k) {
            if(nums[i] == maxEle) {
                countMax--;
            }
            i++;
        }
        if (countMax < k) {
            
            res += (j - i + 1);
        }
    }
    const totalSubarrays = (n * (n + 1)) / 2;
    return totalSubarrays - res;
};