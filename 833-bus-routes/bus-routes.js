/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
    // {
    //     1: b1,
    //     2: b1,
    //     7: [b1, b2],
    //     3: b2,
    //     6: b2,
    // },
    // {

    // }
    //     {
    //   '1': [ 'b0' ],
    //   '2': [ 'b0' ],
    //   '3': [ 'b1' ],
    //   '6': [ 'b1' ],
    //   '7': [ 'b0', 'b1' ],
    //   b0: [ 1, 2, 7 ],
    //   b1: [ 3, 6, 7 ]
    // }

    const adj = {};
    for (let i = 0; i < routes.length; i++) {
        const route = routes[i]
        for (let stop of route) {
            if (!(adj[stop])) adj[stop] = [];
            adj[stop].push(`b${i}`);
        }
        adj[`b${i}`] = route;
    }
    let q = [];
    let vis = {};
    adj[source]?.forEach((e) => {
        q.push(e);
        vis[e] = true;
    })
    let l = 0;
    let found = false
    if (source == target) return 0;
    
    while (q.length && !found) {
        let s = q.length;
        for (let i = 0; i < s && !found; i++) {
            const currBus = q.shift();
            for (let j = 0 ; j < adj[currBus]?.length; j++) {
            const currStop = adj[currBus][j];
                if (currStop == target) {
                    found = true;
                    break;
                }
                if (!(currStop in vis)) {
                    vis[currStop] = true;
                    adj[currStop]?.forEach((newBus, _i) => {
                        if (!(newBus in vis)) {
                            vis[newBus] = true;
                            q.push(newBus)
                        }
                    });
                }
            };
        }
        l++;
    }
    return found ? l : -1;
};