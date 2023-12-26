/**
 * 141. Linked List Cycle
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
 * Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 */

import { ListNode } from "./ListNode";

const hasCycle = (head: ListNode | null): boolean => {
  let fastNode = head;
  let slowNode = head;

  while (fastNode && fastNode.next) {
    fastNode = fastNode.next.next;
    slowNode = slowNode!.next;
    if (slowNode === fastNode) {
      return true;
    }
  }

  return false;
};

/**
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
 */

const input = [3, 2, 0, -4];

let temp = new ListNode();
const headWithDummy = temp;
for (const i of input) {
  temp.next = new ListNode(i);
  temp = temp.next;
}

temp.next = headWithDummy.next!.next!.next;
temp = temp.next!;

const head = headWithDummy.next;

const result = hasCycle(head);
console.log(
  `The Linked List ${result ? "has a cycle" : "does not have a cycle"}`
);
