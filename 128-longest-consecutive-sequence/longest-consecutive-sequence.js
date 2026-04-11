/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    const explore = (e) => {
        if(e.toString() in isPresent) {
            covered[e] = true;
            if (e.toString() in memo) {
                //console.log('in memo', memo[e])
                return memo[e];
            }
           // console.log('e :',e , explore(e-1) )
            memo[e] = 1 + explore(parseInt(e-1)) ;
            return memo[e];
        }
        return 0;
    }
    let isPresent = {};
    nums.map((e) => {
        isPresent[e] = 1;
    });
    var memo = {};
    var covered = {};
    nums.map((e) => {
        if (!(e in covered)) explore(e);
    });
    return Math.max(...(Object.values(memo)));
};