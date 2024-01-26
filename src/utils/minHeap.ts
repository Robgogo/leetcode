export class MinHeap {
  public heap: number[];

  constructor() {
    this.heap = [];
  }

  private swap(i: number, j: number): void {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  private heapify(index: number): void {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapify(smallest);
    }
  }

  heapifyList(list: number[]): number[] {
    this.heap = list;
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    }
    return this.heap;
  }

  heappush(value: number): void {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  heappop(): number | undefined {
    if (this.heap.length === 0) {
      return undefined;
    }

    const minValue = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapify(0);

    return minValue;
  }
}
