var longestValidParentheses = function (s) {
    let open = 0, close = 0, maxLen = 0;
    
    // Left to right scan
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') open++;
        else close++;
        
        if (open === close) {
            maxLen = Math.max(maxLen, 2 * close);
        } else if (close > open) {
            open = close = 0;
        }
    }

    open = close = 0;
    
    // Right to left scan
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '(') open++;
        else close++;
        
        if (open === close) {
            maxLen = Math.max(maxLen, 2 * open);
        } else if (open > close) {
            open = close = 0;
        }
    }
    
    return maxLen;
};
