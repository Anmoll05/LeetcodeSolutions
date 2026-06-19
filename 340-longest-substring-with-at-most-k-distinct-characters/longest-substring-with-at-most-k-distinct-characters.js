/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let obj = {};
    let j = 0;
    let i = 0;
    let max = 0;
    while (i <= j && j < s.length) {
        obj[s[j]] = ++obj[s[j]] || 1;
        while (Object.keys(obj).length > k) {
            --obj[s[i]];
            if (obj[s[i]] <= 0) delete obj[s[i]];
            i++;
        }
        if (Object.keys(obj).length <= k) max = Math.max(max, j - i + 1);
        j++;
    }
    return max;
};