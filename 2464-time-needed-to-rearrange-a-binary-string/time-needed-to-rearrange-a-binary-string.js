var secondsToRemoveOccurrences = function (s) {
    let zeros = 0;
    let time = 0;

    for (let ch of s) {
        if (ch === '0') {
            zeros++;
        } else if (zeros > 0) {
            time = Math.max(time + 1, zeros);
        }
    }

    return time;
};