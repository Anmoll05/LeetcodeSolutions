/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let st = [];
    let vis = {};
    let ind = {};
    for (let i = 0; i < s.length; i++) {
        ind[s[i]] = i;
    }
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in  vis)) {
            while(st.length && st[st.length - 1] > s[i] && ind[st[st.length - 1]] > i) {
                delete vis[st.pop()];
            }
            st.push(s[i]);
            vis[s[i]] = true;
        }
    }
    return st.join("");
};