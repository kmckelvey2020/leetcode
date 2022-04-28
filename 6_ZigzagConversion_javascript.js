/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    //O(numRows * n) time and O(n) extra space
    let arr = new Array(numRows).fill('');
    let colCounter = 0;
    let i = 0;
    let zig = 0;
    
    while(i<s.length){
        for(let j=0; j<numRows; j++){
            if(i>=s.length){
                break;
            }
            if(numRows===1 || colCounter%(numRows-1)===0){
                //no spaces needed for this column
                arr[j] += s[i];
                i++;
            }
            else if(zig!==0){
                //leave blank space
                zig--;
            }
            else{
                //add char
                arr[j] += s[i];
                i++;
                zig--;
            }
        }
        colCounter++;
        zig = numRows-(colCounter%(numRows - 1))-1;
    }
    return arr.join('');
    
};