var numSubarraysWithSum = function(nums, goal) {
    let prefixSum = 0;
    let count = 0;
    let map = new Map();
    map.set(0, 1); // Important: To count subarrays that start from index 0

    for (let num of nums) {
        prefixSum += num;
        // Check if (prefixSum - goal) has been seen before
        if (map.has(prefixSum - goal)) {
            count += map.get(prefixSum - goal);
        }
        // Update map
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
};
