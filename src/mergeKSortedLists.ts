/**
 * 23. Merge k Sorted Lists
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 *
 * Merge all the linked-lists into one sorted linked-list and return it.
 */

import { ListNode } from "./ListNode";

const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {
  if (lists.length < 1) {
    return null;
  }
  let head = lists[0];

  for (let i = 1; i < lists.length; i++) {
    head = mergeTwoLists(head, lists[i]);
  }

  return head;
};

/**
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * Explanation: The linked-lists are:
 * [
 *  1->4->5,
 *  1->3->4,
 *  2->6
 * ]
 * merging them into one sorted list:
 * 1->1->2->3->4->4->5->6
 */

const input1 = [1, 4, 5];
const input2 = [1, 3, 4];
const input3 = [2, 6];

let temp1 = new ListNode();
const headWithDummy1 = temp1;
for (const i of input1) {
  temp1.next = new ListNode(i);
  temp1 = temp1.next;
}

let temp2 = new ListNode();
const headWithDummy2 = temp2;
for (const i of input2) {
  temp2.next = new ListNode(i);
  temp2 = temp2.next;
}

let temp3 = new ListNode();
const headWithDummy3 = temp3;
for (const i of input3) {
  temp3.next = new ListNode(i);
  temp3 = temp3.next;
}

const list1 = headWithDummy1.next;

const list2 = headWithDummy2.next;

const list3 = headWithDummy3.next;

const lists = [list1, list2, list3];

const mergedList = mergeKLists(lists);

console.log(`Merged list is ${mergedList?.printList()}`);
