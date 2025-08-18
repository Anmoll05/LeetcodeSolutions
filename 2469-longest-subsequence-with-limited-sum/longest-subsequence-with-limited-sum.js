/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a,b) => a - b);
    let res = [];
    for (let i = 0; i < queries.length; i++) {
        let s = 0;
        let l = 0;
        for (let j = 0; j < nums.length; j++) {
            s  += nums[j];
            if (s <= queries[i]) {
                l++;
            } else {
                res.push(l);
                break;
            }
            if (j == nums.length - 1) {
                res.push(l)
            }
        }
    }
    return (res);
};