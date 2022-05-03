/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    
    let arr = [];
    let visited = [];
    
    while(root || arr.length>0){
        
        //traverse all the way down current left
        while(root){
            arr.push(root);
            root = root.left;
        }
        
        //when bottom is reached, mark value as visited
        //and traverse next right branch
        root = arr.pop();
        visited.push(root.val);
        root = root.right;
    }
    
    return visited;
};
/*
//recursive approach
 let arr = [];
    const preOrderTraversal = function(node){
        if(node === null){
            return []
        }
        
        //traverse left branch
        if(node.left){
            preOrderTraversal(node.left);
        }
        arr.push(node.val);
        
        //traverse right branch
        if(node.right){
            preOrderTraversal(node.right);
        }
    }
    
    preOrderTraversal(root);
    return arr;
};*/