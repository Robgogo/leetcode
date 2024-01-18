/**
 * 1448. Count Good Nodes in Binary Tree
 * Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
 * Return the number of good nodes in the binary tree.
 */

import { TreeNode } from "./utils/BinaryTree";

const goodNodes = (root: TreeNode | null): number => {
  const traverse = (node: TreeNode | null, maxSofar: number): number => {
    if (!node) return 0;
    let result = node.val >= maxSofar ? 1 : 0;
    maxSofar = Math.max(maxSofar, node.val);

    result += traverse(node.left, maxSofar);
    result += traverse(node.right, maxSofar);

    return result;
  };

  return traverse(root, Number.NEGATIVE_INFINITY);
};
