var maxValue = function(nums) {
    let n = nums.length;

    let ans = Array(n).fill(0);
    let leftMax = Array(n).fill(0);
    let rightMin = Array(n).fill(0);

    leftMax[0] = nums[0];
    rightMin[n - 1] = nums[n - 1];

    // prefix max
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], nums[i]);
    }

    // suffix min
    for (let i = n - 2; i >= 0; i--) {
        rightMin[i] = Math.min(rightMin[i + 1], nums[i]);
    }

    ans[n - 1] = leftMax[n - 1];

    // process from right to left
    for (let i = n - 2; i >= 0; i--) {

        // if partition possible
        if (leftMax[i] <= rightMin[i + 1]) {
            ans[i] = leftMax[i];
        } else {
            ans[i] = ans[i + 1];
        }
    }

    return ans;
};