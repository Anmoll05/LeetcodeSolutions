/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0;
    let j = 0;
    let res = [];
    while (i < nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]) {
            res.push(nums1[i]);
            i++;
        } else {
            res.push(nums2[j]);
            j++;
        }
    }
    while(i < nums1.length) {
        res.push(nums1[i]);
        i++;
    }
    while (j < nums2.length) {
        res.push(nums2[j]);
        j++;
    }
    console.log(res)
    let n = res.length;
    if (res.length % 2 == 0) {
        return (res[(n/2)] + res[(n/2) - 1])/2;
    }
    return res[~~(n/2)];

};