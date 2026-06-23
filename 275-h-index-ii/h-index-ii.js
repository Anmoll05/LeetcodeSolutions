var hIndex = function(citations) {
    let n = citations.length, left = 0, right = n;
    while (left < right) {
        let mid = Math.floor((left + right + 1) / 2);
        if (citations[n - mid] >= mid) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return left;
};