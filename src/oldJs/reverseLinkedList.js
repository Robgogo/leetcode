class ListNode {
  val;
  next;
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head) {
  if (!head || head.next === null) {
    return head;
  }

  const reversed = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reversed;
}

const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);

console.log({ list });
console.log(reverseList(list));
