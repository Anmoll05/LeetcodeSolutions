/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let obj = {};
    let j = 0;
    let i = 0;
    let max = 0;
    while (i <= j && j < s.length) {
        obj[s[j]] = ++obj[s[j]] || 1;
        while (Object.keys(obj).length > 2) {
            --obj[s[i]];
            if (obj[s[i]] <= 0) delete obj[s[i]];
            i++;
        }
        if (Object.keys(obj).length <= 2) max = Math.max(max, j - i + 1);
        j++;
    }
    return max;
};