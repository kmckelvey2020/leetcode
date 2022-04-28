/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    //Using recursion, O(n^2) extra space
    //initialize dp to cache results
    let dp = new Array(s.length+1);
    for(let a=0; a<s.length+1; a++){
        dp[a] = new Array(p.length+1).fill([]);
    }
        
    const checkForMatch = function (s,p,pointerS,pointerP,dp){
        //reached the end successfully
        if(pointerS>=s.length && pointerP>=p.length){
            return true;
        }
        //reached the end of p, but ran out of s to match with
        else if(pointerP>=p.length){
            return false;
        }
        if(pointerS<s.length && pointerP<p.length
           && dp[pointerS][pointerP].length>0){
            return dp[pointerS][pointerP];
        }
        
        //conditions for a match
        let matched = pointerS<s.length &&                                  (s[pointerS]===p[pointerP] || p[pointerP]==='.');
        //checking for *
        //either skip * (pointerP+2) or use it and check for 
        //possible match with next character in s
        if(pointerP+1<p.length && p[pointerP+1]==='*'){
            dp[pointerS][pointerP] =                                            checkForMatch(s,p,pointerS,pointerP+2,dp)
            || matched &&                                                       checkForMatch(s,p,pointerS+1,pointerP,dp);
        }
        else if(matched){
            dp[pointerS][pointerP] = 
                checkForMatch(s,p,pointerS+1, pointerP+1, dp);
        }
        else{
            dp[pointerS][pointerP] = false;
        }
        return dp[pointerS][pointerP];
    }
    return checkForMatch(s,p,0,0,dp);
};