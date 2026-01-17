/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
    var dirs = [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]];
    let q = [];
     x = Math.abs(x);
    y = Math.abs(y);
    q.push([0,0]);
    let seen = new Set();
    seen.add('0,0')
    let l = 0;
    let idx = 0;
    while(q.length) {
        let s = q.length - idx;
        for (let i = 0; i < s; i++) {
            let [xi,yj] = q[idx++];
            if(xi == x && yj == y) {
                return l;
            }
            for(let [u,v] of dirs) {
                let newX = xi + u;
                let newY = yj + v;
                if (newX < -2 || newY < -2) continue;
                if(!seen.has(newX + ',' + newY)) {
                    seen.add(newX + ',' + newY)
                    q.push([newX,newY])
                }
            }
        }
        l++;
    }
};