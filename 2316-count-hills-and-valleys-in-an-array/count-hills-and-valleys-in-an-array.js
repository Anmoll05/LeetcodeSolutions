/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    // [6,6,5,5,4,1]
    //  0,1,2,3,4,5,
    let prev = null; // top
    let res = 0; // 3
    let stInd = 0;
    while(nums[stInd] == nums[stInd + 1]) stInd++;
    ++stInd;
    prev = nums[stInd] > nums[stInd - 1] ? 'bottom' : 'top'; // top
    for (let i = stInd; i <= nums.length - 2; i++) { // 2, prev = top
        if(prev == 'bottom' && nums[i + 1] < nums[i]) {
            res++;
            prev = 'top';
        }
        else if(prev == 'top' && nums[i + 1] > nums[i]) {
            res++;
            prev = 'bottom';
        }
    }
    return res;
};