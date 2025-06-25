/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let count = {
        5: 0, 10: 0, 20: 0
    };
    for (let b of bills) {
        switch(b) {
            case 5:
                //console.log('5',count)
                count[5] = count[5] + 1;
                break;
            case 10:
                //console.log('10',count)
                if (count[5] >= 1) {
                    count[5] = count[5] - 1;;
                    if (count[5] < 0) count[5] = 0;
                } else {
                    return false;
                }
                ++count[10];
                break;
            case 20:
                //console.log(count)
                if (count[10]) {
                    count[10] = count[10] - 1;
                    if (count[10] < 0) count[10] = 0;
                    if (count[5]) {
                        --count[5];
                    } else {
                        return false;
                    }
                } else if (count[5] >= 3){
                    count[5] = count[5] - 3;
                } else {
                    return false;
                }
                break;
        }
    }
    return true;
};