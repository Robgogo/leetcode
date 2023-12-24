/**
 * 143. Reorder List
 * You are given the head of a singly linked-list. The list can be represented as:
 *      L0 → L1 → … → Ln - 1 → Ln
 * Reorder the list to be on the following form:
 *      L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 */

import { ListNode } from "./ListNode";

const findMid = (head: ListNode | null): ListNode | null => {
  let fastNode = head;
  let slowNode = head;

  while (fastNode && fastNode.next) {
    fastNode = fastNode.next.next;
    slowNode = slowNode!.next;
  }
  const second = slowNode!.next;
  slowNode!.next = null;
  return second;
};

const reverseList = (head: ListNode | null): ListNode | null => {
  let reversed: ListNode | null = null;
  while (head) {
    let temp = head.next;
    head.next = reversed;
    reversed = head;
    head = temp;
  }
  return reversed;
};

const mergeList = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  let next1: ListNode | null;
  let next2: ListNode | null;

  while (list1 && list2) {
    next1 = list1.next;
    next2 = list2.next;
    list1.next = list2;
    list2.next = next1;
    list1 = next1;
    list2 = next2;
  }

  return list1;
};

const reorderList = (head: ListNode | null): void => {
  const midNode = findMid(head);
  const reversed = reverseList(midNode);
  mergeList(head, reversed);
};
/**
 * Input: head = [1,2,3,4,5]
 * Output: [1,5,2,4,3]
 */

const input = [1, 2, 3, 4, 5];

let temp = new ListNode();
const headWithDummy = temp;
for (const i of input) {
  temp.next = new ListNode(i);
  temp = temp.next;
}

const head = headWithDummy.next;

console.log("Before", head?.printList());

reorderList(head);

console.log("After", head?.printList());
