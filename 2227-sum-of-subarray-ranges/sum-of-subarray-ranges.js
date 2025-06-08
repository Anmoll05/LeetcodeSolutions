/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    const n = nums.length;
    const nextGreater = Array(n).fill(n);   const prevGreater = Array(n).fill(-1);  const nextSmaller = Array(n).fill(n);   const prevSmaller = Array(n).fill(-1);
    // Monotonic decreasing stack for Next Greater Element
    let st = [];
    for (let i = 0; i < n; i++) {
        while (st.length && nums[st[st.length - 1]] < nums[i]) {
            nextGreater[st.pop()] = i;
        }
        st.push(i);
    }
    // Monotonic decreasing stack for Previous Greater Element
    st = [];
    for (let i = n - 1; i >= 0; i--) {
        while (st.length && nums[st[st.length - 1]] <= nums[i]) {
            prevGreater[st.pop()] = i;
        }
        st.push(i);
    }
    // Monotonic increasing stack for Next Smaller Element
    st = [];
    for (let i = 0; i < n; i++) {
        while (st.length && nums[st[st.length - 1]] > nums[i]) {
            nextSmaller[st.pop()] = i;
        }
        st.push(i);
    }
    // Monotonic increasing stack for Previous Smaller Element
    st = [];
    for (let i = n - 1; i >= 0; i--) {
        while (st.length && nums[st[st.length - 1]] >= nums[i]) {
            prevSmaller[st.pop()] = i;
        }
        st.push(i);
    }
    let totalMax = 0, totalMin = 0;

    for (let i = 0; i < n; i++) {
        let maxCount = (i - prevGreater[i]) * (nextGreater[i] - i);
        let minCount = (i - prevSmaller[i]) * (nextSmaller[i] - i);

        totalMax += nums[i] * maxCount;
        totalMin += nums[i] * minCount;
    }

    return totalMax - totalMin;
};
