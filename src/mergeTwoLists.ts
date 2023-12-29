/**
 * 21. Merge Two Sorted Lists
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 */

import { ListNode } from "./utils/ListNode";

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

const mergeTwoLists2 = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  let mergedList = new ListNode();
  const result = mergedList;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      mergedList.next = list1;
      list1 = list1.next;
    } else {
      mergedList.next = list2;
      list2 = list2.next;
    }
    mergedList = mergedList.next;
  }

  mergedList.next = list2 ?? list1;

  return result.next;
};

/**
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 */

const input1 = [1, 2, 4];
const input2 = [1, 3, 4];

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

const list1 = headWithDummy1.next;

const list2 = headWithDummy2.next;

console.log("Begining", list1?.printList(), list2?.printList());

const merged = mergeTwoLists(list1, list2);

console.log("Merged", merged?.printList());
