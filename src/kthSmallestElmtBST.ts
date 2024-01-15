/**
 * 230. Kth Smallest Element in a BST
 * Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 */

import { TreeNode } from "./utils/BinaryTree";
const inOrderTraversal = (
  root: TreeNode | null,
  lst: Array<number> = []
): Array<number> => {
  if (root) {
    inOrderTraversal(root.left, lst);
    lst.push(root.val);
    inOrderTraversal(root.right, lst);
  }

  return lst;
};

const kthSmallest = (root: TreeNode | null, k: number): number => {
  if (!root) return -1;
  let counter = 0;
  const kList: Array<number> = [];
  const stack: Array<TreeNode> = [];
  let current: TreeNode | null = root;

  while (true) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else if (stack) {
      current = stack.pop()!;
      kList.push(current.val);
      counter++;
      if (counter == k) {
        break;
      }
      current = current.right;
    }
  }
  return current.val;
};

/**
 * Input: root = [3,1,4,null,2], k = 1
 * Output: 1
 */
