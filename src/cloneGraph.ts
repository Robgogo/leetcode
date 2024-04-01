/**
 * 133. Clone Graph
 * Given a reference of a node in a connected undirected graph.
 * Return a deep copy (clone) of the graph.
 * Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
 * ```
 *  class Node {
 *    public int val;
 *    public List<Node> neighbors;
 *  }
 * ```
 * Test case format:
 * For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.
 * An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.
 * The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.
 */

import { Node } from "./utils/Graph";

const cloneGraph = (node: Node | null): Node | null => {
  if (!node) return null;
  const visited = new Map<number, Node>();
  const queue: Node[] = [];
  const clonedNode = new Node(node.val);
  visited.set(clonedNode.val, clonedNode);
  queue.push(node);
  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    const clonedCurrentNode = visited.get(currentNode.val)!;
    const neighbors = currentNode.neighbors;
    if (neighbors) {
      for (const neighbor of neighbors) {
        let clonedNeighbor = visited.get(neighbor.val);
        if (!clonedNeighbor) {
          clonedNeighbor = new Node(neighbor.val);
          visited.set(clonedNeighbor.val, clonedNeighbor);
          queue.push(neighbor);
        }
        clonedCurrentNode.neighbors.push(clonedNeighbor);
      }
    }
  }
  return clonedNode;
};
