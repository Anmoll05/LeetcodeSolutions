/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function maximumGain(s, x, y) {
    // Helper function to remove a specific substring (first, second)
    function removeSubstr(str, first, second, points) {
        let stack = [];
        let score = 0;

        for (let char of str) {
            if (stack.length > 0 && stack[stack.length - 1] === first && char === second) {
                stack.pop();  // remove the 'first'
                score += points; // add points
            } else {
                stack.push(char);
            }
        }
        return [stack.join(''), score];
    }

    let totalScore = 0;
    if (x > y) {
        // Remove "ab" first
        let [temp, score1] = removeSubstr(s, 'a', 'b', x);
        totalScore += score1;
        let [, score2] = removeSubstr(temp, 'b', 'a', y);
        totalScore += score2;
    } else {
        // Remove "ba" first
        let [temp, score1] = removeSubstr(s, 'b', 'a', y);
        totalScore += score1;
        let [, score2] = removeSubstr(temp, 'a', 'b', x);
        totalScore += score2;
    }
    return totalScore;
}