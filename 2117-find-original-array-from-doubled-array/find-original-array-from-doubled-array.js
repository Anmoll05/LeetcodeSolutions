/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    if(changed.length % 2 !== 0) return [];
    changed.sort((a,b) => a - b);
    let obj = {};
    for (let n of changed) {
        obj[n] = ++obj[n] || 1;
    }
    let res = [];
    //console.log('above',obj)
    for (let i = changed.length - 1; i >= 0; i--) {
        //console.log(i)
        const ele = changed[i];
        if (ele in obj) {
            const half = ele / 2;
            if (half in obj) {
                res.push(half);
                obj[ele] = obj[ele] - 1;
                if (obj[ele] <= 0) {
                    delete obj[ele];
                }
                obj[half] = obj[half] - 1;
                if (obj[half] <= 0) {
                    delete obj[half];
                }
            }
        }
       // console.log(obj)
    }
    if (Object.keys(obj).length == 0) {
        return res;
    } return []
};