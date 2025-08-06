/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let cSum = 0;
    for (let n of nums) {
        if(n%2 === 0) {
            cSum += n;
        }
    }
    let res = [];
    for (let [val,ind] of queries) {
        const curEle = nums[ind];
        const aftEle = nums[ind] + val;
        nums[ind] += val;
        if (curEle % 2 == 0) {
            if (aftEle % 2 == 0) {
                // both even
                cSum += val;
            } else {
                cSum -= curEle;
            }
            res.push(cSum);
        } else {
            if (aftEle % 2 == 0) {
                cSum += aftEle;
            } else {
                // both odd
            }
            res.push(cSum);
        }
    }
    return (res)
};