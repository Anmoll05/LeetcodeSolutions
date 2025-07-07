/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let paint = {
        'R': 'G',
        'G': 'R'
    }
    let color = {};
    let adj = {};
    const dfs = (ind, myColor) => {
        if((ind in color) && color[ind] == myColor) {
            return false;
        }
        if((ind in color) && color[ind] == paint[myColor]) {
            return true;
        }
        if (!(ind in color)) {
            //console.log('myColor', myColor, 'paint', paint[myColor])
            color[ind] = paint[myColor];
        }
        let res = true;
        graph[ind]?.forEach(nei => {
            res = res && dfs(nei, paint[myColor]);
        });
        return res;
    }
    let r = true;
    
    for (let i = 0; i < graph.length; i++) {
        if(!(i in color)) {
            r = r && dfs(i,"R");
        }
    }
    //console.log(color)
    return r;
};