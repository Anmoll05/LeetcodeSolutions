/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarrays = function (nums) {
  const AND = nums.reduce((acc, curr) => acc & curr);
  if (AND > 0) return 1;

  let ans = 0;
  let curr = null;
  for (let i = 0; i < nums.length; i++) {
    curr = curr === null ? nums[i] : curr & nums[i];

    if (curr === 0) {
      ans++;
      curr = null;
    }
  }

  return ans;
};