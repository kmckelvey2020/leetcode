/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //Shrinking window, O(n) time and O(1) space
    let maximum = 0;
    let start = 0;
    let end = height.length-1;
    for(let i=0; i<height.length; i++){
        maximum = Math.max(maximum,(Math.min(height[start], height[end])*(end-start)));
        if(height[start]<height[end]){
            start++;
        }
        else if(height[start]>height[end]){
            end--;
        }
        else{
            start++;
            end--;
        }
    }
    return maximum;
};