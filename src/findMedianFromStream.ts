/**
 * 295. Find Median from Data Stream
 * The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.
 * For example, for arr = [2,3,4], the median is 3.
 * For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
 * Implement the MedianFinder class:
 *  - MedianFinder() initializes the MedianFinder object.
 *  - void addNum(int num) adds the integer num from the data stream to the data structure.
 *  - double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 */

import { MinHeap } from "./utils/minHeap";
import { MaxHeap } from "./utils/maxHeap";

class MedianFinder {
  small: MaxHeap;
  large: MinHeap;

  constructor() {
    this.small = new MaxHeap();
    this.small.heapifyList([]);

    this.large = new MinHeap();
    this.large.heapifyList([]);
  }

  addNum(num: number): void {
    this.small.heappush(num);

    if (
      this.small.heap.length > 0 &&
      this.large.heap.length > 0 &&
      this.small.heap[0] > this.large.heap[0]
    ) {
      const val = this.small.heappop()!;
      this.large.heappush(val);
    }

    if (this.small.heap.length > this.large.heap.length + 1) {
      const val = this.small.heappop()!;
      this.large.heappush(val);
    }

    if (this.large.heap.length > this.small.heap.length + 1) {
      const val = this.large.heappop()!;
      this.small.heappush(val);
    }
  }

  findMedian(): number {
    if (this.small.heap.length > this.large.heap.length) {
      return this.small.heap[0];
    } else if (this.large.heap.length > this.small.heap.length) {
      return this.large.heap[0];
    }
    return (this.small.heap[0] + this.large.heap[0]) / 2;
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const medianFinder = new MedianFinder();

medianFinder.addNum(1); // arr = [1]
const first = medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(2); // arr = [1, 2]
const second = medianFinder.findMedian(); // return 2.0
medianFinder.addNum(3); // arr[1, 2, 3]
const third = medianFinder.findMedian(); // return 2.0
medianFinder.addNum(4); // arr[1, 2, 3, 4]
const fourth = medianFinder.findMedian(); // return 2.5
medianFinder.addNum(5); // arr[1, 2, 3, 4, 5]
const fifth = medianFinder.findMedian(); // return 3.0

console.log({
  small: medianFinder.small.heap,
  large: medianFinder.large.heap,
  first,
  second,
  third,
  fourth,
  fifth,
});
