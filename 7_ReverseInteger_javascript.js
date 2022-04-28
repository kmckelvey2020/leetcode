/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //assume you cannot store 64 bit integers
    let sign = '';
    let strX = x.toString();
    if (strX.startsWith('-')){
        sign = '-';
        strX.replace('-','');
    }
    strX = sign + strX.split('').reverse().join('');
    if(parseInt(strX)>=Math.pow(-2,31) && parseInt(strX)<=Math.pow(2,31)-1){
        return parseInt(strX);
    }
    else{
        return 0;
    }
};