export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  public printList(): string {
    let head: ListNode | null = this;
    let s = "";
    while (head) {
      s += `${head.val}->`;
      head = head.next;
    }
    return s;
  }
}
