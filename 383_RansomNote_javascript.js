/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // O(n) time complexity, O(1) extra space
    for(let letter of ransomNote){
        if(magazine.includes(letter)){
           magazine = magazine.replace(letter, '');
        }
        else{
            return false;
        }
    }
    return true;
};