/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 */

import { TreeNode } from "./utils/BinaryTree";

const buildTree = (preorder: number[], inorder: number[]): TreeNode | null => {
  if (preorder.length < 1 || inorder.length < 1) return null;

  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);
  const rootIndexInOrder = inorder.indexOf(rootVal);

  const leftInOrder = inorder.slice(0, rootIndexInOrder);
  const rightInOrder = inorder.slice(rootIndexInOrder + 1);

  const leftPreOrder = preorder.slice(1, 1 + leftInOrder.length);
  const rightPreOrder = preorder.slice(1 + leftInOrder.length);

  root.left = buildTree(leftPreOrder, leftInOrder);
  root.right = buildTree(rightPreOrder, rightInOrder);

  return root;
};

/**
 * Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * Output: [3,9,20,null,null,15,7]
 */
