/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let res = [];
    for (let i = 0 ; i < s.length; i++) {
        let st = i;
        while(s[i] == s[i+1]) {
            i++;
        }
        res.push(i - st + 1);
    }
    let r = 0;
    for (let i = 0; i < res.length - 1; i++) {
        //console.log(Math.min(res[i], res[i+1]), i, i + 1)
        r += Math.min(res[i], res[i+1]);
    }
    return r;
};