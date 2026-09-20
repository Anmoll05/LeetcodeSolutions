/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let st = [];
    let th = null;
    for (let i = nums.length - 1; i >=0 ; i--) {
        if (th && nums[i] < st[st.length - 1] && nums[i] < th) return true;
        while (st.length && st[st.length - 1] < nums[i]) {
            th = st.pop()
        }
        st.push(nums[i])
    }
    return false;
};