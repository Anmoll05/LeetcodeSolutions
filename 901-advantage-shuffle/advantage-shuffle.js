/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
    
    //  [2,7,11,15]
    // [ 1,4,10,11]


    // [8,12,24,32]
    // [11-3,13-0,25-1,32-2]
    nums1.sort((a,b) => a - b);
    let nums2Mapped = [];
    nums2.forEach((e,ind) => {
        nums2Mapped[ind] = [e , ind]
    });
    nums2Mapped.sort((a,b) => a[0] - b[0]);
    let i = 0;
    let j = nums1.length - 1;
    let res = [];
    let skipped = [];
    for (let k = 0; k < nums2Mapped.length; k++) {
        while (nums1[i] <= nums2Mapped[k][0] && i < nums1.length) {
            skipped.push(nums1[i])
            i++;
        }
        res[nums2Mapped[k][1]] = nums1[i];
        i++;
    }
    for (let i = 0; i < res.length; i++) {
        if (!res[i]) res[i] = skipped.pop();
    }
    return res;

};