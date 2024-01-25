/**
 * 297. Serialize and Deserialize Binary Tree
 * Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
 * Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
 * Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
 */

import { TreeNode } from "./utils/BinaryTree";

/*
 * Encodes a tree to a single string.
 */
const serialize = (root: TreeNode | null): string => {
  if (!root) return "-";

  const serializedLeft = serialize(root.left);
  const serializedRight = serialize(root.right);

  return `${root.val}/${serializedLeft}/${serializedRight}`;
};

/*
 * Decodes your encoded data to tree.
 */
const deserialize = (data: string): TreeNode | null => {
  const nodes = data.split("/");
  const buildTree = (): TreeNode | null => {
    const val = nodes.shift();

    if (!val) return null;

    if (val === "-") return null;

    const node = new TreeNode(Number.parseInt(val));

    node.left = buildTree();
    node.right = buildTree();

    return node;
  };

  return buildTree();
};
