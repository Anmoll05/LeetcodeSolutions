/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (!nums.length) return [];
    let res = [];
    let op = [];
    res.push([nums[0],nums[0]]);
    for (let i = 1; i < nums.length; i++) {
        const curr = nums[i];
        if (res[res.length - 1][1] == curr - 1) {
            res[res.length - 1][1] = curr;
        } else {
            res.push([curr, curr]);
        }
    }
    for (let [x,y] of res) {
        if ( x == y) {
            op.push(`${x}`)
        } else {
            op.push(`${x}->${y}`)
        }
    }
    return op;
};