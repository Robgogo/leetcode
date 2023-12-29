/**
 * Given the root of a binary tree, invert the tree, and return its root.
 */

import { TreeNode } from "./utils/BinaryTree";

const invertTree = (root: TreeNode | null): TreeNode | null => {
  if (!root) {
    return null;
  }
  const left = invertTree(root.right);
  const right = invertTree(root.left);
  root.left = left;
  root.right = right;
  return root;
};

const invertTree2 = (root: TreeNode | null): TreeNode | null => {
  if (!root) {
    return null;
  }
  const queue = [root];

  while (queue.length > 0) {
    const dequeued = queue.pop()!;
    const tempLeft = dequeued.left;
    dequeued.left = dequeued.right;
    dequeued.right = tempLeft;
    if (dequeued.left) {
      queue.push(dequeued.left);
    }
    if (dequeued.right) {
      queue.push(dequeued.right);
    }
  }
  return root;
};

/**
 * Input: root = [2,1,3]
 * Output: [2,3,1]
 */

const input = [2, 1, 3];

const root = new TreeNode(2);

root.right = new TreeNode(1);
root.left = new TreeNode(3);

console.log("Original Tree", root);
const inverted = invertTree2(root);
console.log("Inverted Tree", inverted);
