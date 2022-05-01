/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    // O(nlogn) time complexity, O(1) extra space
    nums.sort((a,b)=>{return a-b});
    
    let lowDiv = 1;
    let midDiv;
    let highDiv = nums[nums.length-1];
    
    // If we add all the elements in nums and it is <= threshold
    // then 1 is the smallest divisor that works
    let sumDiv = nums.reduce((prev,curr)=>{
        return prev + curr
    });
    if(sumDiv<=threshold){
        return 1;
    }
    
    // If threshold = nums.length, then the smallest divisor that 
    // will work is the maximum element in nums
    if(threshold===nums.length){
        return highDiv;
    }
    
    while(lowDiv<=highDiv){
        midDiv = Math.floor((lowDiv+highDiv)/2);
        if(lowDiv===highDiv){
            break; //lowDiv===midDiv===highDiv===answer
        }
        sumDiv = 0;
        for(let num of nums){
            sumDiv += Math.ceil(num/midDiv);
        }
        if(sumDiv<=threshold && highDiv!==midDiv){
            highDiv = midDiv;
        }
        else{//sumDiv is too high, over threshold
            lowDiv = midDiv+1;
        }
    }
    return midDiv;
};