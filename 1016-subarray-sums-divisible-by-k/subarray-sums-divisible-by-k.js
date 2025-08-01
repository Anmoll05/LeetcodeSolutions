
const calculatePossitiveModule = (sum, k) => ((sum % k) + k) % k;

var subarraysDivByK = function(nums, k) {
    let obj = {};
    let total = 0;
    let sum = 0;
    for(let i = 0; i < nums.length; i += 1) {
        sum += nums[i];
        const p = calculatePossitiveModule(sum, k);
        if(p === 0) total += 1;
        obj[p] = (obj[p] || 0) + 1;
        if(obj[p] > 1) {
            total += obj[p] - 1;
        }
    }
    return total;
};