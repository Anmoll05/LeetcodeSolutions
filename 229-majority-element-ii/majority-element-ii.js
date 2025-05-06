var majorityElement = function(nums) {
    if (nums.length === 0) return [];

    // 1st pass - Find potential candidates
    let x = null, y = null, cx = 0, cy = 0;

    for (let num of nums) {
        if (num === x) {
            cx++;
        } else if (num === y) {
            cy++;
        } else if (cx === 0) {
            x = num;
            cx = 1;
        } else if (cy === 0) {
            y = num;
            cy = 1;
        } else {
            cx--;
            cy--;
        }
    }

    // 2nd pass - Validate actual frequencies
    cx = 0;
    cy = 0;
    for (let num of nums) {
        if (num === x) cx++;
        else if (num === y) cy++;
    }

    const res = [];
    if (cx > Math.floor(nums.length / 3)) res.push(x);
    if (cy > Math.floor(nums.length / 3)) res.push(y);

    return res;
};