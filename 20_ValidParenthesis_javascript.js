/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const matches = {
        ')':'(',
        '}':'{',
        ']':'['
    };
    let arr = [];
    for(let index=0; index<s.length; index++){
        if(s[index]==='(' || s[index]==='{' || s[index]==='['){
            arr.push(s[index]);
        }
        else if(arr!==[] && arr[arr.length-1]===matches[s[index]])         {
            arr.pop();
        }
        else{
            return false;
        }
    }
    return (arr.length<1 ? true : false);
};
/*while(s){
        if(s.includes('()') || s.includes('{}') || s.includes('[]')){
            s = s.replace(/(\(\))|(\{\})|(\[\])/g , '');
        }
        else{
            return false;
        }
    }
    return true;*/