var checkValidString = function(s) {
    // const dp = (ind, st) => {
    //     if (ind === s.length) {
    //         return st.length === 0;
    //     }

    //     if (s[ind] === '(') {
    //         return dp(ind + 1, [...st, '(']);
    //     }

    //     if (s[ind] === ')') {
    //         if (st.length && st[st.length - 1] === '(') {
    //             let newSt = [...st];
    //             newSt.pop();
    //             return dp(ind + 1, newSt);
    //         }
    //         return false;
    //     }

    //     // s[ind] === '*'
    //     // Try as empty
    //     if (dp(ind + 1, [...st])) return true;

    //     // Try as '('
    //     if (dp(ind + 1, [...st, '('])) return true;

    //     // Try as ')'
    //     if (st.length) {
    //         let newSt = [...st];
    //         newSt.pop();
    //         if (dp(ind + 1, newSt)) return true;
    //     }

    //     return false;
    // };

    // return dp(0, []);
    let low = 0, high = 0;

    for (let ch of s) {
        if (ch === '(') {
            low++;  // we must open one
            high++; // we could open one
        } else if (ch === ')') {
            low = Math.max(low - 1, 0); // try to close one (if any open)
            high--; // definitely lose one open possibility
        } else { // '*'
            low = Math.max(low - 1, 0); // treat as ')'
            high++; // or treat as '('
        }

        if (high < 0) return false; // too many ')'
    }

    return low === 0;
};

