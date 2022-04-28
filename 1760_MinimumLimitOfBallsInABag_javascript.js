/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
 var minimumSize = function(nums, maxOperations) {
    
    let total = nums.reduce((prev,curr)=>{return prev+curr});
    let opUsed = 0;
    
    //operations needed for each element is
    //maxOperations * element/total OR
    //maxOperations * element/total +1 
    //(will add 1 operation for max penalties where needed)
    let operations = nums.map((element)=>{
        opUsed += Math.floor(maxOperations*element/total);
        return [element,Math.floor(maxOperations*element/total)];
    });
    
    let penalties = operations.map((element)=>{
        return Math.ceil(element[0]/(element[1]+1));
    });
    
    penalties.sort((a,b)=>{return a-b});
    
    if(opUsed<maxOperations){
        //could have used an extra operation on the elements
        //that returned the maximum penalties, so eliminate the
        //top maxOperations - opUsed penalties
        return penalties[penalties.length-(maxOperations-opUsed)-1];
    }
    else{
        return penalties[penalties.length-1];

    }
};