/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //O(n) time and O(1) extra space
    //count number of zeros
    let count = 0;
    
    //find zeros, delete them, and push to end of array
    //use count to know when to stop (reached the zeros we pushed)
    for(let i=0; i<nums.length-count; i++){
        if(nums[i]===0){
            nums.splice(i,1);
            nums.push(0);
            count++;
            i--;
        }
    }
    
};

/*
//O(n) time and O(n) extra space
    let count = 0;
    
    //find the number of zeros and delete them
    for(let i=0; i<nums.length; i++){
        if(nums[i]===0){
            nums.splice(i,1);
            count++;
            i--;
        }
    }
    
    //push correct number of zeros to end of array
    let zeros = new Array(count).fill(0);
    nums.push(...zeros);
    
};*/