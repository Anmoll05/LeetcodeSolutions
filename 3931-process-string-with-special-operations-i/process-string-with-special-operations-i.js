/**
 * @param {string} s
 * @return {string}
 */
var processStr = function(s) {
    let res = "";
    for (let i = 0 ; i < s.length; i++) {
        if (s[i] == '*') {
            if (res) res = res.substr(0,res.length - 1);
        } else if (s[i] == "#") {
            res = res + res;
        } else if (s[i] == "%") {
            let rev = res.split("").reverse().join("");
            res = rev;
        } else {
            res += s[i];
        }
    }
    return res;
};