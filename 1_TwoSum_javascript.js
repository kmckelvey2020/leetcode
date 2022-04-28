/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target){
    //O(n) time, O(n) extra space
    let myHash = new Map;
    for(let i=0; i<nums.length; i++){
        if(myHash.has(target-nums[i])){
            return [i, myHash.get(target-nums[i])];
        }
        myHash.set(nums[i], i);
    }
}