/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let duplicate = -1, missing = -1;

    // Step 1: Mark visited numbers
    for (let i = 0; i < nums.length; i++) {
        let val = Math.abs(nums[i]);
        if (nums[val - 1] < 0) {
            duplicate = val;
        } else {
            nums[val - 1] *= -1;
        }
    }
    //console.log(nums)
    // Step 2: Find missing number
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            missing = i + 1;
        }
    }

    return [duplicate, missing];
};
