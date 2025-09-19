/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let hash = {};
    let res = [];
    for (let i = 0; i < groupSizes.length; i++) {
        const currGroup = groupSizes[i];
        if (!hash[currGroup]) hash[currGroup] = [];
        hash[currGroup].push(i)
        if(hash[currGroup].length == currGroup) {
            res.push([...hash[currGroup]]);
            hash[currGroup] = [];
        }
    }
    return res;
};