/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let st = [];
    for (let c of s) {
        if (st.length) {
            if (st[st.length - 1] === c) {
                if (st[st.length - 2] && st[st.length - 1] === st[st.length - 2]) continue;
            }
        } 
            st.push(c)
        
    }
    return st.join('');
};