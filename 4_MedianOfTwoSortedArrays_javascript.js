/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    //To do: The overall run time complexity should be O(log (m+n)).
    nums1.push(...nums2);
    nums1.sort((a,b)=>{return a-b}); //not O(log (m+n))
    let medianIndex = Math.ceil(nums1.length/2);
    if(nums1.length%2===0){
        return (nums1[medianIndex-1]+nums1[medianIndex])/2;
    }
    else{
        return nums1[medianIndex-1];
    }
};