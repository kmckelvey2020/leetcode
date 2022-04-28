//Given an array of positive numbers and a positive number ‘k,’ 
//find the maximum sum of any contiguous subarray of size ‘k’.

const maxSubArray = function(arr,k){
    //Sliding window, O(n) time, O(1) extra space
    let start = 0;
    let sum = 0;
    let maxSum = 0;

    for(let end=0; end<arr.length; end++){
        sum += arr[end];

        if(end>=k-1){
            maxSum = Math.max(maxSum, sum);
            sum -= arr[start];
            start++;
        }
    }
    return maxSum;
}

console.log(maxSubArray([2,1,5,1,3,2], 3));
console.log(maxSubArray([2, 3, 4, 1, 5], 2));