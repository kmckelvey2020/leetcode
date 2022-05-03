/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // O(n) time complexity, O(26+1)=O(1) extra space
    let alphabet = new Array(26).fill(0);
    let i = 0;
    while(i<s.length || i<t.length){
        if(i>=s.length || i>= t.length){
            return false;
        }
        alphabet[s.charCodeAt(i)-97]++;
        alphabet[t.charCodeAt(i)-97]--;
        i++;
    }
    if(alphabet.every((element)=>{return element===0})){
        return true;
    }
    else{
        return false;
    }
};
/*
// slower solution
    for(let i=0; i<s.length; i++){
            if(t.includes(`${s[i]}`)){
            t = t.replace(`${s[i]}`,' ');
            s = s.replace(`${s[i]}`,' ');
        }
        else{
            return false;
        }
    }
    if(s===t)
        return true;
    else
        return false;
};*/