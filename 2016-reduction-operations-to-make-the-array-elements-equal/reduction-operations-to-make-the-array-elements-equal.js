/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
   nums.sort((a,b) => b - a);
   let i = 0;
   let j = 0;
   let numOfCurrent = 0;
   let res = 0;
   while (i <= j && j < nums.length) {
     while (nums[i] == nums[j] && j < nums.length) {
        j++;
     }
     if (j == nums.length) break;
     numOfCurrent += (j - i);
     res += numOfCurrent;
     i = j;
     //console.log(i,j, numOfCurrent, res)
   }
   return res;
};