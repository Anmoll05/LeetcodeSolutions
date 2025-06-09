/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 //[1, -1]
var maxSlidingWindow = function(nums, k) {
    let res = [];
    let deq = [];
    let i = 0;
    let j = 0;
    while (j < nums.length) { // j = 0
        while(deq.length && nums[deq[deq.length - 1]] < nums[j]) {
            deq.pop();
        }
        deq.push(j); // 0
        while(deq.length && deq[0] < (j - k + 1)) {
            deq.shift();
        }
        if ((j - i + 1) == k){
            res.push(nums[deq[0]]);
            i++;
        }
        j++;
    }
    console.log(res)
    return (res);
};