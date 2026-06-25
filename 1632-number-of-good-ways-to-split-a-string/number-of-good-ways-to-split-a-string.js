/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    const set = new Set();
    let leftCount = [];
    let rightCount = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        set.add(c)
        leftCount[i] = set.size;
    }
    set.clear();
    for (let i = s.length - 1; i >= 0; i--) {
        const c = s[i];
        set.add(c)
        rightCount[i] = set.size;
    }
    let res = 0;
    for (let i = 0; i < leftCount.length - 1; i++) {
        if(leftCount[i] == rightCount[i + 1]) res++;
    }
    return res;

};