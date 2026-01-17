/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// var minKnightMoves = function(x, y) {
//     var dirs = [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]];
//     let q = [];
//      x = Math.abs(x);
//     y = Math.abs(y);
//     q.push([0,0]);
//     let seen = new Set();
//     seen.add('0,0')
//     let l = 0;
//     let idx = 0;
//     while(q.length) {
//         let s = q.length - idx;
//         for (let i = 0; i < s; i++) {
//             let [xi,yj] = q[idx++];
//             if(xi == x && yj == y) {
//                 return l;
//             }
//             for(let [u,v] of dirs) {
//                 let newX = xi + u;
//                 let newY = yj + v;
//                 if (newX < -2 || newY < -2) continue;
//                 if(!seen.has(newX + ',' + newY)) {
//                     seen.add(newX + ',' + newY)
//                     q.push([newX,newY])
//                 }
//             }
//         }
//         l++;
//     }
// };
var minKnightMoves = function(x, y) {
    let res = 0;
    let queue =[[0,0]]
    let moves = [[2,1],[1,2],[-2,1],[-1,2],[-2,-1],[-1,-2],[2,-1],[1,-2]];
    let visited = new Set();
    while(queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i ++) {
            let current = queue.shift();
            let cX = current[0];
            let cY = current[1];
            if (cX === x && cY === y) return res;
            for (let move of moves) {
                let nX = cX + move[0];
                let nY = cY + move[1];
                if (!visited.has(nX + ',' + nY)) {
                    visited.add(nX + ',' + nY);
                    queue.push([nX, nY])
                }
            }
        }
        res ++
    }
};