/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let isFirstOne = false;
    let countOpen = 0;
    let countClose = 0;
    let res = "";
    for (let c of s) {
        if (c == "(") {
           countOpen++
        } else {
           countClose++
        }
        if(c == "(" && countOpen - countClose >= 2) {
            res += c;
        }
        if(c == ")" && countOpen - countClose >= 1) {
            res += c;
        }
    }
    return res;
};