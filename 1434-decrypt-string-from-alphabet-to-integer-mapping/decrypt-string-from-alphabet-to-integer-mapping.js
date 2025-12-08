/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let res = '';
    for (let i = 0; i < s.length; i++) { // 3
        if(s[i+2] !== "#" || i > s.length - 2 - 1) { // 2
            res += String.fromCharCode(96 + parseInt(s[i]))
        } else {
            res += String.fromCharCode(96 + parseInt(s[i] + s[i + 1]));
            i = i + 2;
        }
    }
    return res;
};