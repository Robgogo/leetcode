export class Node {
  val: number;
  neighbors: Node[];

  constructor(value: number, neighbors?: Node[]) {
    this.val = value || 0;
    this.neighbors = neighbors || [];
  }
}
