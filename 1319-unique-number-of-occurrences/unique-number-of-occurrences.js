/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let freq = {};
    let uniq = {};
    for (let n of arr) {
        freq[n] = ++freq[n] || 1;
    }
    for (let k in freq) {
        if(freq[k] in uniq) {
            return false;
        }
        uniq[freq[k]] = true;
    }
    return true;
};