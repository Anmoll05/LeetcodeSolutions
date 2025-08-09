/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.trim().split(" ");
    arr = arr.filter(e => { if (e) return e });
    return arr.reverse().join(' ');
};