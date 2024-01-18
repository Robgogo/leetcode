/**
 * 124. Binary Tree Maximum Path Sum
 * A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
 * The path sum of a path is the sum of the node's values in the path.
 * Given the root of a binary tree, return the maximum path sum of any non-empty path.
 */
import { TreeNode } from "./utils/BinaryTree";

const maxPathSum = (root: TreeNode | null): number => {
  let maxSum = Number.NEGATIVE_INFINITY;

  const maxPathSumHelper = (node: TreeNode | null): number => {
    if (node === null) {
      return 0;
    }

    const leftSum = Math.max(maxPathSumHelper(node.left), 0);
    const rightSum = Math.max(maxPathSumHelper(node.right), 0);

    const currentSum = node.val + leftSum + rightSum;
    maxSum = Math.max(maxSum, currentSum);

    return node.val + Math.max(leftSum, rightSum);
  };

  maxPathSumHelper(root);

  return maxSum;
};
