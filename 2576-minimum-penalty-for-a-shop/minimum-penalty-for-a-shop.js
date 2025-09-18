/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let yArr = [];
    let nArr = [];
    yArr[0] = 0;
    nArr[0] = 0;
    let s = 0;
    for (let i = 0; i < customers.length; i++) {
        const ele = customers[i];
        if (ele == "Y") {
            yArr[i + 1] = yArr[i] + 1;
            nArr[i + 1] = nArr[i];
        } else {
            nArr[i + 1] = nArr[i] + 1;
            yArr[i + 1] = yArr[i];
        }
    }
    s = yArr[yArr.length - 1];
    let penalty = s;
    let ind = 0;
    for (let i = 0; i <= customers.length; i++) {
        let pen = (s - yArr[i]) + nArr[i];
        if (pen < penalty) {
            penalty = pen;
            ind = i;
        }
    }
    return ind;
};