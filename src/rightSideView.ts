/**
 * 199. Binary Tree Right Side View
 * Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
 */

import { TreeNode } from "./utils/BinaryTree";

const rightSideView = (root: TreeNode | null): number[] => {
  if (!root) return [];
  const result: number[] = [];
  let queue: TreeNode[] = [root];

  while (queue.length) {
    const currentLevel: number[] = [];
    const queueSize = queue.length;

    for (let i = 0; i < queueSize; i++) {
      const currentNode = queue.shift();
      if (i === queueSize - 1) result.push(currentNode!.val);
      if (currentNode?.left) {
        queue.push(currentNode.left);
      }
      if (currentNode?.right) {
        queue.push(currentNode.right);
      }
    }
  }
  return result;
};

const rightSideViewRecursive = (root: TreeNode | null): number[] => {
  const result: number[] = [];

  const traverse = (node: TreeNode | null, level: number) => {
    if (!node) return;

    if (level === result.length) {
      result.push(node.val);
    }

    traverse(node.right, level + 1);
    traverse(node.left, level + 1);
  };

  traverse(root, 0);

  return result;
};
