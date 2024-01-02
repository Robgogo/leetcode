/**
 * 572. Subtree of Another Tree
 * Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
 * A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
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

const isSubtree = (
  root: TreeNode | null,
  subRoot: TreeNode | null
): boolean => {
  if (!root && !subRoot) return true;
  if (!root || !subRoot) return false;

  return (
    isSameTree(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
};

/**
 * Input: root = [3,4,5,1,2], subRoot = [4,1,2]
 * Output: true
 */

const root = new TreeNode(3);

root.right = new TreeNode(4);
root.right.right = new TreeNode(1);
root.right.left = new TreeNode(2);
root.left = new TreeNode(5);

const subRoot = new TreeNode(4);

subRoot.right = new TreeNode(1);
subRoot.left = new TreeNode(2);

const isSub = isSubtree(root, subRoot);

console.log(`The given tree is${!isSub ? " not" : ""} subtree of the root!`);
