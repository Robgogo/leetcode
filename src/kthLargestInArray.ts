/**
 * 215. Kth Largest Element in an Array
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * Can you solve it without sorting?
 */

import { MaxHeap } from "./utils/maxHeap";

const findKthLargest = (nums: number[], k: number): number => {
  const heapq: MaxHeap = new MaxHeap();

  heapq.heapifyList(nums);

  while (k > 1) {
    heapq.heappop();
    k--;
  }
  return heapq.heappop()!;
};

/**
 * Input: nums = [3,2,1,5,6,4], k = 2
 * Output: 5
 */

const nums = [3, 2, 1, 5, 6, 4];
const k = 2;

const output = findKthLargest(nums, k);

console.log(output);
