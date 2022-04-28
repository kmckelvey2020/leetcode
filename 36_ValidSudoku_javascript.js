/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    //O(9*9)=O(1) time and O(9*9)=O(1) extra space
    //holds row#, col#, subBox (Math.floor(row/3), Math.floor(col/3)) for each board value
    let validation = [];
    
    let r=0; //rows
    let c=0; //columns
    let rowStr;
    let colStr;
    let subStr;
    
    while(r<board.length){
        if(c>=board[0].length){
            r++;
            c=0;
        }
        if(r>=board.length){
            return true; //we reached the end of the board
        }
        else if(board[r][c]==='.'){
            c++;
            continue;
        }
        else{
            rowStr = `${board[r][c]} is in row ${r}`;
            colStr = `${board[r][c]} is in col ${c}`;
            subStr = `${board[r][c]} is in subbox ${Math.floor(r/3)}, ${Math.floor(c/3)}`
            
            if(!validation.includes(rowStr) && 
            !validation.includes(colStr) &&
            !validation.includes(subStr)){
                validation.push(rowStr);
                validation.push(colStr);
                validation.push(subStr);
            }
            else{
                return false;
            }
        }
        c++;
    };
};