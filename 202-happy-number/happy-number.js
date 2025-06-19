/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const giveMeSum = (num) => {
        let s = 0;
        num = num.toString();
        for (let i = 0 ; i < num.length; i++) {
            s = s + parseInt(num[i]) * parseInt(num[i]);
        }
        return s;
    }
    let slow = n;
    let fast = giveMeSum(giveMeSum(n));
    while (fast !== 1) {
        //console.log("slow", slow, "fast", fast)
        if (slow == fast) {
            return false;
        }
        slow = giveMeSum(slow);
        fast = giveMeSum(giveMeSum(fast));
    }
    return true;
};