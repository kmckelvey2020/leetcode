/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    //Using Hashmap/Dictionary/Object, O(13*n)=O(n) time, O(1) space
    const numerals = {'M':1000,'CM':900,'D':500,'CD':400,'C':100, 'XC':90,'L':50,'XL':40,'X':10,'IX':9,'V':5,'IV':4,'I':1};
    let roman = '';
    for(let numeral in numerals){
        while(num>=numerals[numeral]){
            roman = roman.concat(`${numeral}`);
            num -= numerals[numeral];
        }
    }
    return roman; 
};