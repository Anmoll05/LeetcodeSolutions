/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let obj = {};
    for (let t of text) {
        obj[t] = ++obj[t] || 1;
    }
    let res = 0;
    let str = "balloon";
    let doBreak = false;
    while (true) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] in obj) {
                --obj[str[i]];
                if (obj[str[i]] == 0) delete obj[str[i]];
            } else {
                doBreak = true;
            }
        }
        if (doBreak) break;
        res++;
    }
    return res;
};