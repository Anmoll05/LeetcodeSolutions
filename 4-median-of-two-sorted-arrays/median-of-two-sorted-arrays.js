/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0;
    let j = 0;
    let k = 0;
    let ele1 = null;
    let ele2 = null;
    let m = nums2.length;
    let n = nums1.length;
    //let res = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            if (k == ~~((m + n) / 2)) {
                ele2 = nums1[i]
            }
            if (k == ~~((m + n) / 2) - 1) {
                ele1 = nums1[i]
            }
            i++;
        } else {
            if (k == ~~((m + n) / 2)) {
                ele2 = nums2[j]
            }
            if (k == ~~((m + n) / 2) - 1) {
                ele1 = nums2[j]
            }
            j++;
        }
        k++;
    }
    while (i < nums1.length) {
        if (k == ~~((m + n) / 2)) {
            ele2 = nums1[i]
        }
        if (k == ~~((m + n) / 2) - 1) {
            ele1 = nums1[i]
        }
        k++;
        i++;
    }
    while (j < nums2.length) {
        if (k == ~~((m + n) / 2)) {
            ele2 = nums2[j]
        }
        if (k == ~~((m + n) / 2) - 1) {
            ele1 = nums2[j]
        }
        k++;
        j++;
    }
    if ((m + n) % 2 == 0) {
        return (ele1 + ele2)/2.0;
    }
    return ele2;

};