/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
   const result = [];
   const mod = 1000000007;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0; // running sum from i
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      result.push(sum);
    }
  }

  result.sort((a,b) => a - b);
  let res = 0;
  for (let i = left - 1; i <= right - 1; i++) {
    res = (res  + result[i] ) % mod
  }
  return res
};