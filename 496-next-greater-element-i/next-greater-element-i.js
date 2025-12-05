/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let nge = new Array(nums2.length).fill(-1);
    let st = [];
    for (let i = nums2.length - 1; i >= 0; i--) {
        while (st.length && st[st.length - 1] < nums2[i]) {
            st.pop();
        }
        nge[i] = st[st.length - 1] || -1;
        st.push(nums2[i]);
    }
    let map = {};
    for (let i = 0; i < nums2.length; i++) {
        map[nums2[i]] = i;
    }
    let res = [];
    for (let i = 0 ; i < nums1.length; i++) {
        res[i] = nge[map[nums1[i]]];
    }
    return res;
};