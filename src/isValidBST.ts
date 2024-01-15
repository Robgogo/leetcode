/**
 * 98. Validate Binary Search Tree
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 *  - The left subtree of a node contains only nodes with keys less than the node's key.
 *  - The right subtree of a node contains only nodes with keys greater than the node's key.
 *  - Both the left and right subtrees must also be binary search trees.
 */

import { TreeNode } from "./utils/BinaryTree";

const validBSTChecker = (
  node: TreeNode | null,
  min: number,
  max: number
): boolean => {
  if (!node) return true;
  if (node.val <= min || node.val >= max) {
    return false;
  }

  return (
    validBSTChecker(node.left, min, node.val) &&
    validBSTChecker(node.right, node.val, max)
  );
};
const isValidBST = (root: TreeNode | null): boolean => {
  return validBSTChecker(
    root,
    Number.NEGATIVE_INFINITY,
    Number.POSITIVE_INFINITY
  );
};
