/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
    let dup = {};
    let index = {};
    for (let i = 0; i < s.length; i++) {
        index[s[i]] = i;
    }
    //console.log(index)
    let st = [];
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in dup)) {
            while (st.length && st[st.length - 1] > s[i] && index[st[st.length - 1]] > i) {
                delete dup[st.pop()];
            }
            st.push(s[i]);
            dup[s[i]] = true;
        }
    }
    return st.join("");
};