/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    let sumArr = [];
    let i = 0;
    let j = 0;
    let s = 0;
    while (j < nums.length) {
        s += nums[j];
        while ((j - i + 1) > (2 * k + 1)) {
            s -= nums[i];
            i++;
        }
        if ((j - i + 1) == (2 * k  + 1)) {
            sumArr.push(s);
        }
        j++
    }
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if ((i - k) >= 0 && (i + k) < nums.length) {
            res.push(Math.floor(sumArr[i - k] / (2 * k + 1)))
        } else {
            res.push(-1);
        }
    }
    return res;
};