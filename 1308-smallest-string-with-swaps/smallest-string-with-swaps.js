/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    let adj = {};
    for (let [u,v] of pairs) {
        if(!adj[u]) adj[u] = [];
        adj[u].push(v);
        if(!adj[v]) adj[v] = [];
        adj[v].push(u);
    }
    let visited = {};
    let indices, str;
    let ans = [];
    const dfs = (ind) => {
        if(visited[ind]) return;
        visited[ind] = true;
        indices.push(ind);
        str.push(s[ind]);
        adj[ind]?.forEach((nei) => {
            if(!visited[nei]) dfs(nei);  
        });
    };

    for (let i = 0; i < s.length; i++) {
        if(!visited[i]) {
            str = [];
            indices = [];
            dfs(i);
            indices.sort((a,b) => a - b);
            str.sort();
            for(let j=0;j<str.length;j++){
                ans[indices[j]]=str[j]
            }
        }
    }
    return ans.join('');
};

// d c a b
// 0 1 2 3

// d - b   c - a   d - a
// 0.  3.   1  2.   0   2

// b c a d
// 0 1 2 3

// a c b d
// a b c d