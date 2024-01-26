/**
 * 703. Kth Largest Element in a Stream
 * Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * Implement KthLargest class:
 *  - KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
 *  - int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.
 */

/**
 * def __init__(self, k: int, nums: List[int]):
        self.minHeap, self.k = nums, k
        heapq.heapify(self.minHeap)

        while(len(self.minHeap) > k):
            heapq.heappop(self.minHeap)

    def add(self, val: int) -> int:
        heapq.heappush(self.minHeap, val)
        if(len(self.minHeap) > self.k):
            heapq.heappop(self.minHeap)
        return self.minHeap[0]

       
        
 */

import { MinHeap } from "./utils/minHeap";

class KthLargest {
  heapq: MinHeap;
  k: number;
  constructor(k: number, nums: number[]) {
    this.heapq = new MinHeap();
    this.k = k;

    this.heapq.heapifyList(nums);

    while (this.heapq.heap.length > k) {
      this.heapq.heappop();
    }
  }

  add(val: number): number {
    this.heapq.heappush(val);
    if (this.heapq.heap.length > this.k) {
      this.heapq.heappop();
    }
    return this.heapq.heap[0];
  }
}

/**
 * Input
 * ["KthLargest", "add", "add", "add", "add", "add"]
 * [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
 * Output
 * [null, 4, 5, 5, 8, 8]
 * Explanation
 *  - KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
 *  - kthLargest.add(3);   // return 4
 *  - kthLargest.add(5);   // return 5
 *  - kthLargest.add(10);  // return 5
 *  - kthLargest.add(9);   // return 8
 *  - kthLargest.add(4);   // return 8
 */

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3));
console.log(kthLargest.add(5));
console.log(kthLargest.add(10));
console.log(kthLargest.add(9));
console.log(kthLargest.add(4));
