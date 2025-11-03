/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            if (!map[i + j]) map[i + j] = [];
            map[i + j].push(nums[i][j])
        }
    }
    let arr = [];
    for (let k in map) {
        arr.push(k)
    };
    arr.sort((a, b) => a - b);
    let res = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = map[arr[i]].length - 1; j >= 0; j--) {
            res.push(map[arr[i]][j])
        }
    }
    return res;
};