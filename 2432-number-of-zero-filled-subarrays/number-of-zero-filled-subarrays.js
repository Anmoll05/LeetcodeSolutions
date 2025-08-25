/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
    let i = 0;
    let j = 0;
    let number = 0;
    let nonZeroes = 0;
    while (j < nums.length) {
        if (nums[j] !== 0) {
            nonZeroes++;
        }
        while (nonZeroes > 0)  {
            //console.log(nonZeroes)
            if (nums[i] != 0) {
                --nonZeroes;
            }
            i++;
        }
        
        if (nonZeroes == 0) {
            number +=  j - i + 1
        }
        j++;
    }
    return number
};