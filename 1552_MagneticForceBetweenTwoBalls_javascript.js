/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    // O(nlogn) time complexity where n = difference between max value and min value in position
    // O(1) extra space
    // Helper function to check if midMin is a possible min distance
    const possible = function(position, m, midMin) {
        let balls = 1, currPos = 0;
        for(let i=1; i<position.length; i++){
            if(position[i]-position[currPos]>=midMin){
                balls++;
                currPos = i;
            }
            if(balls===m){
                return true;
            }
        }
        return false;
    }
    
    // Position will need to be sorted
    position.sort((a,b)=>{return a-b});
    
    let lowMin = 1;
    let midMin;
    let highMin = position[position.length-1]-position[0];
    
    if(m<=2) return highMin;
    
    while(lowMin<highMin){
        midMin = Math.floor((lowMin+highMin+1)/2);
        if(possible(position, m, midMin)){
            lowMin = midMin;
        }
        else{
            highMin = midMin - 1;
        }
    }
    return lowMin;
};