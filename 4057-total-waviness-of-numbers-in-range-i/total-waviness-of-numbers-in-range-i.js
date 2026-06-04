/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    let sum = 0
    for (let i = num1; i <= num2; i++) {
        const numStr = i.toString();
        const arr = numStr.split("");
        let top = 0;
        let valley = 0;
        for (let j = 1; j < arr.length - 1; j++) {
            if (arr[j] > arr[j - 1] && arr[j] > arr[j + 1]) {
                top++;
            }
            if (arr[j] < arr[j - 1] && arr[j] < arr[j + 1]) {
                valley++;
            }
        }
        sum += (top + valley);
    }
    return sum;
};