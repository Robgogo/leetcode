class ListNode {
  val;
  next;
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeLists = (list1, list2) => {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  if (list1.val < list2.val) {
    list1.next = mergeLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeLists(list1, list2.next);
    return list2;
  }
};

const mergeLists2 = (list1, list2) => {
  let mergedList = new ListNode();
  const result = mergedList;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      mergedList.next = new ListNode(list1.val);
      list1 = list1.next;
      mergedList = mergedList.next;
    } else {
      mergedList.next = new ListNode(list2.val);
      list2 = list2.next;
      mergedList = mergedList.next;
    }
  }

  if (list1) {
    mergedList.next = list1;
  }

  if (list2) {
    mergedList.next = list2;
  }

  return result.next;
};
