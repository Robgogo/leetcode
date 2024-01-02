/**
 * 100. Same Tree
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 */

import { TreeNode } from "./utils/BinaryTree";

const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return (
    p.val === q.val &&
    isSameTree(p.right, q.right) &&
    isSameTree(p.left, q.left)
  );
};

/**
 * Input: p = [1,2,3], q = [1,2,3]
 * Output: true
 */

const input = [2, 1, 3];

const p = new TreeNode(1);

p.right = new TreeNode(2);
p.left = new TreeNode(3);

const q = new TreeNode(1);

q.right = new TreeNode(2);
q.left = new TreeNode(3);

const isSame = isSameTree(p, q);

console.log(`The given trees are${!isSame ? " not" : ""} the same trees!`);
