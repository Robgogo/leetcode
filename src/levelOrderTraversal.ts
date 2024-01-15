/**
 * 102. Binary Tree Level Order Traversal
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 */

import { TreeNode } from "./utils/BinaryTree";

const levelOrder = (root: TreeNode | null): number[][] => {
  if (!root) return [[]];

  let result: number[][] = [];
  let queue: TreeNode[] = [root];

  while (queue.length) {
    const currentLevel: number[] = [];
    const queueSize = queue.length;
    for (let i = 0; i < queueSize; i++) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode!.val);
      if (currentNode?.left) {
        queue.push(currentNode.left);
      }
      if (currentNode?.right) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel);
  }
  return result;
};
