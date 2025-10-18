/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    const dfs = (arr) => {
        if (arr.length == 1) {
            return arr[0];
        }
        let newArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            newArr[i] = (arr[i] + arr[i + 1]) % 10;
        }
        return dfs(newArr);
    }
    return dfs(nums);
};