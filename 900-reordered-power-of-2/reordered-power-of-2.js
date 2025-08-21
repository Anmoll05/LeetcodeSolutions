var reorderedPowerOf2 = function(n) {
    // helper: return sorted string of digits
    const countDigits = (x) => x.toString().split("").sort().join("");

    const target = countDigits(n);

    // check all powers of 2 up to 10^9 (since n <= 10^9)
    for (let i = 0; i < 31; i++) {   // 2^30 ~ 1e9
        if (countDigits(1 << i) === target) {
            return true;
        }
    }
    return false;
};
