/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    // 255.255.111.35
    // 
    const validIP = (str) => {
        const splits = str.split(".");

        if (splits.length !== 4) return false;  // IPv4 must have 4 parts

        for (let part of splits) {
            if (part.length === 0) return false;              // empty
            if (part.length > 1 && part[0] === '0') return false; // leading zero
            if (!/^\d+$/.test(part)) return false;            // must be digits
            if (Number(part) < 0 || Number(part) > 255) return false;
        }
        //console.log(splits)
        return true;
    };
    if (s.length > 12 || s.length < 4) return [];
    let res = [];
    const dfs = (str, i, rem) => {
        if (i >= s.length) {
            if (validIP(str)) {
                res.push(str);
            }
            return;
        }
        if (rem == 0) {
            dfs(str + s.slice(i, s.length), s.length, rem);
        } else {
            for (let ind = i; ind < (i + 3) && ind < s.length; ind++) {
                str += s[ind];
                dfs(str + '.', ind + 1, rem - 1);
            }
        }
    };
    dfs("", 0, 3);
    return res;
};