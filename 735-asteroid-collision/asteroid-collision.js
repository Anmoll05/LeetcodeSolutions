/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let st = []; // 5, 10, -5
    for (let i = 0 ; i < asteroids.length; i++) { // 
       st.push(asteroids[i]);
        while(st.length > 1 && st[st.length - 1] < 0 && st[st.length - 2] > 0) { // false
            let top = st.pop();
            let sTop = st.pop();
            if (top + sTop == 0) {

            } else if ( top + sTop < 0) {
                st.push(top);
            } else {
                st.push(sTop);
            }
        }
       
    }
    return st;
};

// top > 0 && 
// top < 0