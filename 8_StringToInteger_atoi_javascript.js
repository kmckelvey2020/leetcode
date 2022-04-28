/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let min = (-1)*Math.pow(2,31);
    let max=Math.pow(2,31)-1;
    s=s.trimStart(); //trim leading whitespace
    if(s===''){return s};
    //look for - or + at start (if present),
    //followed by 1 or more digits
    s=s.match(/^[-+]?[\d]+/); 
    if(!s){return 0};
    if(BigInt(s)<min){
        return min;
    }
    else if(BigInt(s)>max){
        return max;
    }
    return parseInt(s);
};