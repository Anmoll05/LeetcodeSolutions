/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;
    for (let i = 0; i <= 31; i++) {
        let tmp = 1 << i;
         let co = 0;
         let cz = 0;
        for (let j = 0; j < nums.length; j++) {
           
            if ((nums[j] & tmp) == 0) cz++;
            else co++;

           
        }
         if (co % 3 == 1) res = (res | tmp);
    }
    return res;
};