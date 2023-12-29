/**
 * 104. Maximum Depth of Binary Tree
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

import { TreeNode } from "./utils/BinaryTree";

const maxDepth = (root: TreeNode | null): number => {
  if (!root) {
    return 0;
  }

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return 1 + Math.max(left, right);
};

/**
 * Input: root = [2,1,3]
 * Output: 2
 */

const input = [2, 1, 3];

const root = new TreeNode(2);

root.right = new TreeNode(1);
root.left = new TreeNode(3);

console.log("Original Tree", root);

const depth = maxDepth(root);

console.log(`The max depth of the tree is ${depth}`);
