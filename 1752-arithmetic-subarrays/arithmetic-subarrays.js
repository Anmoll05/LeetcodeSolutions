var checkArithmeticSubarrays = function(nums, l, r) {
    function isArithmetic(sub) {
        sub.sort((a, b) => a - b);
        const diff = sub[1] - sub[0];
        for (let i = 2; i < sub.length; i++) {
            if (sub[i] - sub[i - 1] !== diff) {
                return false;
            }
        }
        return true;
    }

    const res = [];
    for (let q = 0; q < l.length; q++) {
        res.push(isArithmetic(nums.slice(l[q], r[q] + 1)));
    }
    return res;    
};