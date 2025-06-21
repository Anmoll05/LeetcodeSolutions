/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
    if(arr.length == 1) return arr[0];
    let mTK = -100000;
    let dp = [];
    dp[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        dp[i] = Math.max(dp[i - 1] + arr[i], arr[i])
    }
    mTK = Math.max(...dp);
    let pSum = [];
    let sSum = [];
    pSum[0] = arr[0];
    sSum[arr.length - 1] = arr[arr.length - 1];
    for (let i = 1; i < arr.length; i++) {
        pSum[i] = Math.max(pSum[i - 1] + arr[i], arr[i]);
    }
    for (let i = arr.length - 2; i >= 0 ; i--) {
        sSum[i] = Math.max(sSum[i + 1] + arr[i], arr[i]);
    }
    let max = -10000;
    //console.log(pSum, sSum)
    for (let i = 0; i < arr.length; i++) {
        //console.log((pSum[i - 1] || 0), sSum[i + 1] || 0, 'sum', (pSum[i - 1] || 0) + (sSum[i + 1] || 0))
        max = Math.max((pSum[i - 1] || 0) + (sSum[i + 1] || 0), max)
    }
    //console.log(max)
    return Math.max(max, mTK);
};