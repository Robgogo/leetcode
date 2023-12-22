/**
 * 19. Remove Nth Node From End of List
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */

import { ListNode } from "./ListNode";

const removeNthFromEnd = (
  head: ListNode | null,
  n: number
): ListNode | null => {
  if (!head) return null;

  let fastNode: ListNode | null = head;
  let slowNode: ListNode = head;

  for (let i = 0; i < n; i++) {
    fastNode = fastNode!.next;
  }

  if (fastNode === null) return head.next;

  while (fastNode.next) {
    fastNode = fastNode!.next!;
    slowNode = slowNode!.next!;
  }

  slowNode.next = slowNode!.next!.next;

  return head;
};

/**
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 */

let node = new ListNode(1);
let head = node;
node.next = new ListNode(2);
node = node.next;
node.next = new ListNode(3);
node = node.next;
node.next = new ListNode(4);
node = node.next;
node.next = new ListNode(5);
node = node.next;

console.log("Before", head.printList());

const removed = removeNthFromEnd(head, 2);

console.log("Head after removal", removed?.printList());
