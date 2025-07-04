/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let st = [];
    let obj = {};
    for (let i = 0 ; i < s.length; i++) {
        const ele = s[i];
        if (ele == '(') {
            st.push([ele, i]);
        } else if (ele == ')') {
            if (st.length && st[st.length - 1][0] == '(') {
                st.pop();
            } else {
                st.push([ele, i]);
            }
        }
    }
    for (let i = 0; i < st.length; i++) {
        obj[st[i][1]] = true;
    };
    let res = "";
    for (let i = 0 ; i < s.length; i++) {
        if (i in obj) continue;
        res += s[i];
    }
    return res;
};