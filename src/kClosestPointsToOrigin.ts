/**
 * 973. K Closest Points to Origin
 * Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
 * The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).
 * You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
 */

import { MinHeap } from "./utils/minHeap";

const kClosest = (points: number[][], k: number): number[][] => {
  const heap = new MinHeap();
  const minHeap: number[] = [];
  const hashMap: Map<number, Array<number>> = new Map();

  for (const [x, y] of points) {
    const dist = x ** 2 + y ** 2;
    minHeap.push(dist);
    hashMap.set(dist, [x, y]);
    console.log({ x, y, hashMap });
  }

  heap.heapifyList(minHeap);
  const result: number[][] = [];

  while (k > 0) {
    const key = heap.heappop();
    const vals = key ? hashMap.get(key)! : [];

    result.push(vals);
    k--;
  }
  return result;
};

/**
 * Input: points = [[1,3],[-2,2]], k = 1
 * Output: [[-2,2]]
 * Explanation:
 *  - The distance between (1, 3) and the origin is sqrt(10).
 *  - The distance between (-2, 2) and the origin is sqrt(8).
 *  - Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
 *  - We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
 */

const points = [
  [0, 1],
  [1, 0],
];
const k = 2;

const output = kClosest(points, k);

console.log(output);
