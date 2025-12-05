/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let st = [];
    for (let i = 0; i < asteroids.length; i++) {
        st.push(asteroids[i])
        while (st.length >= 2 && st[st.length - 1] < 0 && st[st.length - 2] > 0) {
            let f = st.pop();
            let s = st.pop();
            if (Math.abs(f) > s ) {
                st.push(f);
            } else  if(Math.abs(f) < s ){
                st.push(s)
            } else {

            }
        }
    }
    return st;
};
