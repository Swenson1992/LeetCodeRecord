/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
/**
 * Definition for a binary root node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (root == null) return 0;
    let path = depth(root.left) + depth(root.right)
    return Math.max(path, diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right))

    function depth (node) {
        if(node == null) return 0;
        return 1 + Math.max(depth(node.left), depth(node.right));
    }
};
// @lc code=end

