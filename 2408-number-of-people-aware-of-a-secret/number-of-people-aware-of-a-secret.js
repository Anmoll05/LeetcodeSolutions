var peopleAwareOfSecret = function (n, delay, forget) {
    const MOD = 1e9 + 7;
    const diff = new Array(n + 2).fill(0);

    diff[1] = 1; // 1 person knows the secret on day 1
    let curr = 0; // active sharers
    let res = 0;

    for (let day = 1; day <= n; day++) {
        curr = (curr + diff[day]) % MOD; // people who can share today

        // these people will start sharing from (day + delay)
        if (day + delay <= n) {
            diff[day + delay] = (diff[day + delay] + curr) % MOD;
        }

        // these people will forget at (day + forget)
        if (day + forget <= n) {
            diff[day + forget] = (diff[day + forget] - curr + MOD) % MOD;
        }
    }

    // Sum people who still remember the secret on day n
    for (let day = n - forget + 1; day <= n; day++) {
        res = (res + diff[day]) % MOD;
    }

    return res;
};
