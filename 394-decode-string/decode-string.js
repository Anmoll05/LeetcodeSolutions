/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let st = [];
    let temp = [];
    for(let i = 0; i < s.length; i++) {
        st.push(s[i]);
       // console.log(st);
        if (s[i] === ']') {
            st.pop();
            let temp = '';
            while (st[st.length - 1] !== '[') {
                temp += st.pop();
            }
            st.pop();
            let n = '';
            while(st[st.length - 1] >= '0' && st[st.length - 1] <= '9') {
                n += st.pop();
            }
            let num = parseInt(n.split('').reverse().join(''));
            let str = '';
           // console.log('n', n, temp)
            while (num > 0) {
                for (let j = 0; j < temp.length; j++) {
                    str += temp[j];
                }
                num--;
            }
            //console.log('str', str)
            for (let j = str.length - 1; j >= 0; j--) {
                st.push(str[j]);
            }
        }
    }
    return st.join('');
};