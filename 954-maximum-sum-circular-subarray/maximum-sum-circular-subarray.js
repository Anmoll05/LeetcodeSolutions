/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let maxSum = nums[0];
    let minSum = nums[0];
    let currMaxSum = nums[0];
    let currMinSum = nums[0];
    let totalSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        // Kadane's algorithm for maximum sum
        // Either extend previous subarray or start a new one
        currMaxSum = Math.max(currMaxSum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, currMaxSum);
        
        // Kadane's algorithm for minimum sum
        // Either extend previous subarray or start a new one
        currMinSum = Math.min(currMinSum + nums[i], nums[i]);
        minSum = Math.min(minSum, currMinSum);
        
        // Calculate the total sum of all elements
        totalSum += nums[i];
    }
    
    // The circular sum is the total sum minus the minimum subarray sum
    const circularSum = totalSum - minSum;
    
    // Edge case: if all numbers are negative, then maxSum will be negative
    // and circularSum will be 0 (empty subarray), but we need to return the max negative value
    if (circularSum === 0) {
        return maxSum;
    }
    
    // Return the maximum of the regular subarray sum and the circular subarray sum
    return Math.max(maxSum, circularSum);
};