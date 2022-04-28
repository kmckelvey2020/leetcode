/*Given an array of positive numbers and a positive number ‘S,’ 
find the length of the smallest contiguous subarray whose sum is 
greater than or equal to ‘S’. Return 0 if no such subarray exists.*/

const smallestSubArray = function(arr,s){
    //Sliding Window, O(n+n)=O(n) time and O(1) 
    let start = 0;
    let sum = 0;
    let smallestLength = arr.length+1;

    for(let end = 0; end<arr.length; end++){
        sum += arr[end];
        while(sum>=s){
            smallestLength = Math.min(smallestLength, end-start+1);
            sum -= arr[start];
            start++;
        }
    }
    if(smallestLength>=arr.length+1){
        return 0;
    }
    return smallestLength;
}

console.log(`The smallest subarray with a greater sum is ${smallestSubArray([2, 1, 5, 2, 3, 2], 7)}`);
console.log(`The smallest subarray with a greater sum is ${smallestSubArray([3, 4, 1, 1, 6], 8)}`);