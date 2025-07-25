/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let map = {};
    let isAllNegative = true;
    for (let n of nums) {
        map[n] = ++map[n] || 1;
        if (n >= 0) {
            isAllNegative = false;
        }
    }
    if (isAllNegative) {
        return Math.max(...nums);
    }
    let s = 0;
    let arr = Object.keys(map);
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) < 0) continue;
        s += parseInt(arr[i]);
    }
    return s;
};