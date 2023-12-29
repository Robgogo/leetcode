/**
 * 19. Remove Nth Node From End of List
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */

import { ListNode } from "./utils/ListNode";

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

const input = [1, 2, 3, 4, 5];

let temp = new ListNode();
const head = temp;
for (const i of input) {
  temp.next = new ListNode(i);
  temp = temp.next;
}

console.log("Before", head.next?.printList());

const removed = removeNthFromEnd(head, 2);

console.log("Head after removal", removed?.printList());
