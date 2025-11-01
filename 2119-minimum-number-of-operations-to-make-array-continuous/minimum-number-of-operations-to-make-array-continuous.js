var minOperations = function(nums) {
  const n = nums.length;
  if (n <= 1) return 0;

  // unique sorted values (temp in your C++ code)
  const arr = Array.from(new Set(nums)).sort((a, b) => a - b);

  // upper bound: first index in arr[l..r) where arr[index] > ele
  const findUpperBound = (ele, l, r) => {
    while (l < r) {
      const mid = Math.floor((l + r) / 2);
      if (arr[mid] > ele) r = mid;
      else l = mid + 1;
    }
    return r;
  };

  let result = n; // worst case: change all

  for (let i = 0; i < arr.length; i++) {
    const L = arr[i];
    const R = L + (n - 1);

    // same as: j = upper_bound(begin(temp), end(temp), R) - begin(temp)
    const j = findUpperBound(R, i, arr.length);

    const within_range = j - i;
    const out_of_range = n - within_range;

    result = Math.min(result, out_of_range);

    if (result === 0) return 0; // early exit: can't get better than 0
  }

  return result;
};