/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a,b) => a - b);
    let res = 0;
    // [12,1,42]
    // [1,12,42]
    // take last most
    //console.log(happiness)
    for(let i = 0; i < k; i++) { // 0 1
        let poppedEle = happiness.pop(); // 42 12
        if(i !== 0) { 
            poppedEle = poppedEle - i; 11
        }
        poppedEle = (poppedEle < 0) ? 0 : poppedEle;
        res += poppedEle; // 42 + 11
    }
    return res;
};