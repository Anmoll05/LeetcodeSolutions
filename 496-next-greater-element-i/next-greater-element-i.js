/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let s = [];
    let map = {};
    for (let i = nums2.length - 1; i >= 0; i--) {
        while(s.length && nums2[s[s.length - 1]] <= nums2[i]) {
            s.pop();
        }
        if(!s.length) {
            map[nums2[i]] = -1
        } else {
            map[nums2[i]] = nums2[s[s.length - 1]];
        }
        s.push(i)
    }
    let res = [];
    nums1.forEach((e) => {
        res.push(map[e])
    });
    return res;
};