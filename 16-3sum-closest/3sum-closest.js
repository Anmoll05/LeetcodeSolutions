/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a - b);
    let min = Infinity;
    let minEle;
    for(let i = 0; i < nums.length; i++) {
        let k = i + 1;
        let j = nums.length - 1;
        while (k < j) {
            const ele1 = nums[i];
            const ele2 = nums[j];
            const ele3 = nums[k];
            const sum = ele1 + ele2 + ele3;
            if ((Math.abs(sum - target)) < min) {
                min = Math.abs(sum - target);
                minEle = sum;
            }
            if (sum - target > 0) {
                j--;
            } else {
            k++;
            }
        }
    }
    //console.log(min)
    return minEle;
};

t = 1
sum = -3

sum - t, -4
