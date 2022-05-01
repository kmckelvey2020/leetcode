/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // O(2n)=O(n) time complexity, O(1) extra space
    // Use nums as it's own hashmap with nums[i] as the current
    // index. Multiply element by -1 to mark as visited (since
    // all elements are positive.) Make sure to return all numbers 
    // to positive values after finding duplicate so that nums
    // remains unchanged.
    let answer = -1;
    for(let i=0; i<nums.length; i++){
        if(nums[Math.abs(nums[i])]<0){
            // Previously visited if negative so index nums[i]
            // is the duplicate
            answer = Math.abs(nums[i]);
        }
        else{// If unvisited, multiply by -1 to mark as visited
            nums[Math.abs(nums[i])] *= -1;
        }
    }

    // Return nums to original state
    for(let i=0; i<nums.length; i++){
        if(nums[i]<0){
            nums[i] *= -1;
        }
    }
    
    return answer;
};
/*
// Too slow, TLE
var findDuplicate = function(nums) {
    
    for(let i = nums.length-1; i>=0; i--){
        if(nums.indexOf(nums[i])!==i){
            return nums[i];
        }
    }
};*/