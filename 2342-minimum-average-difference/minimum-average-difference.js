/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    let preAvg = [];
    let sufAvg = [];
    preAvg[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        preAvg[i] = (preAvg[i - 1] + nums[i]);
    }
    sufAvg[nums.length - 1] = nums[nums.length - 1];
    for (let i = nums.length - 2; i >= 0; i--) {
        sufAvg[i] = nums[i] + sufAvg[i + 1];
    }
    let res = {
        "ind" : -1,
        "ele" : Infinity
    }
    let n = nums.length;
    //console.log("preAvg", preAvg, sufAvg)
    for (let i = 0; i <= nums.length - 1; i++) {
        let preDen = i + 1;
        let sufDen = n - (i + 1);
        let leftAvg = Math.floor(preAvg[i]/preDen);
        let rightAvg = Math.floor((sufAvg[i + 1] || 0) / sufDen)
        leftAvg = isNaN(leftAvg) ? 0 : leftAvg;
        rightAvg = isNaN(rightAvg) ? 0 : rightAvg;
       // console.log(leftAvg, rightAvg)
        let absDiff = Math.abs(leftAvg - rightAvg);
       // console.log("absDiff",  absDiff)
        if (absDiff < res.ele) {
            res.ind = i;
            res.ele = absDiff
        }
    }
    return res.ind;
};