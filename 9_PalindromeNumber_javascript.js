/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //O(n) time and O(1) extra space
    let reversed = 0;
    let original = x;
    
    //if x ends with zero but isn't zero or is negative
    if(x%10===0 && x!==0 || x<0){
        return false;
    }
    
    //x%10 = ones place, move existing reverse digits one place 
    //and add current ones digit. Decrease x by ones place;
    while(x>0){
        reversed = reversed * 10 + x%10;
        x = Math.floor(x/10); 
    }
    if(original===reversed){return true} else{return false};
};

/*
//by converting to string
var isPalindrome = function(x) {
    let i=x.toString();
    let j=x.toString().split('').reverse().join('');
    if(i===j){return true} else{return false};
};*/