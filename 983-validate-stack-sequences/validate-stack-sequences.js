/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let st = [];
    let i = 0;
    let j = 0;
    while (i < pushed.length && j < popped.length) {
       // console.log('first',obj)
        while (st[st.length - 1] != popped[j] && i < pushed.length) {
            st.push(pushed[i]);
            i++;
        }
      //  console.log('second',obj)
        while (st[st.length - 1] == popped[j] && j < popped.length) {
            st.pop()
            j++;
        }
       // console.log('third',obj)
    }
   return st.length ? false : true;
};