/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let adj = {};
    let inDegree = new Array(numCourses).fill(0)
    prerequisites.forEach(([a,b]) => {
        if(!adj[b]) adj[b]=[];
        adj[b].push(a);
        inDegree[a]++;
    });
    let q = [];
    for (let i = 0 ; i < inDegree.length; i++) {
        if(inDegree[i] == 0) {
            q.push(i)
        }
    }
    //console.log(inDegree)
    let res = [];
    while (q.length) {
        let node = q.shift();
        res.push(node);
        adj[node]?.forEach((nei) => {
            inDegree[nei]--;
            if(inDegree[nei] == 0) {
                q.push(nei)
            }
        })
    }
    //console.log(res)
    if(res.length == numCourses) {
        return true;
    }
    return false;
};