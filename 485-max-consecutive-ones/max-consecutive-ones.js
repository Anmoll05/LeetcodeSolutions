/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let s = 0;
    let max = 0;
    for (let n of nums) {
        if(!n) s = 0;
        else s += 1;
        max = Math.max(max,s)
    }
    return max;
};