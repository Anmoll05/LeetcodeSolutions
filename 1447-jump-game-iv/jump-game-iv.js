/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
    let q = [];
    q.push(0);
    let vis = {};
    vis[0] = true;
    let dup = {};
    arr.forEach((n, _ind) => {
        if (!(n in dup)) dup[n] = [];
        dup[n].unshift(_ind);
    });
    let l = 0;
  //  console.log(dup)
    while (q.length) {
        let s = q.length;
        for (let i = 0; i < s; i++) {
            let node = q.shift();
           // console.log(node)
            if (node == arr.length - 1) {
               // console.log(l)
                return l;
            }
            if (node + 1 < arr.length && !((node + 1) in vis)) {
                q.push(node + 1);
                vis[node + 1] = true;
            }
            if (node - 1 >= 0 && !((node - 1) in vis)) {
                q.push(node - 1);
                vis[node - 1] = true;
            }
            //console.log('dup', dup[arr[node]], vis)
            dup[arr[node]]?.forEach((e, index) => {
               // console.log('inside dup', index, vis, index in vis)
                if (!(e in vis) && e !== node) {
                    q.push(e);
                    vis[e] = true;
                }
            });
           dup[arr[node]] = null;
        }
        //console.log(q)
        l++;
    }
};