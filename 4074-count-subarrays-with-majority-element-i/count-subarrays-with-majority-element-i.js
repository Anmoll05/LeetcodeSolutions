/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    
    let count = 0 ;
    let j , i ;
    let n  = nums.length;
    for( i = 0 ; i < n  ; i++){
        let countOfTarget = 0 ;
        for(j = i ; j < n ; j++){
            if(nums[j] == target){
                countOfTarget++;
            }
        
        if(countOfTarget >(j-i+1)/2){
            count++ ;
        }}
    }
    return count ;
};