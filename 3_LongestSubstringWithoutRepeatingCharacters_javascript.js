/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let str = '';
    let i=0;
    let j=0;
    let longestSubStr = '';
    while(j<s.length){
        while(!str.includes(s[i]) && i<s.length){
            str=str.concat(s[i]);
            i++; 
        }
        if(str.length>longestSubStr.length){
            longestSubStr = str;
        }
        j++;
        i=j;
        str='';
    }
    return longestSubStr.length;
};