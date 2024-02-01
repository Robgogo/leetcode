/**
 * 621. Task Scheduler
 * Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.
 * However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.
 * Return the least number of units of times that the CPU will take to finish all the given tasks.
 */

import { MaxHeap } from "./utils/maxHeap";

const leastInterval = (tasks: string[], n: number): number => {
  const map: Record<string, number> = {};
  for (const char of tasks) {
    map[char] = (map[char] || 0) + 1;
  }

  const maxHeap = new MaxHeap();
  const vals = Object.values(map);
  maxHeap.heapifyList(vals);

  let timeTaken: number = 0;
  const queue: Array<number[]> = [];

  while (maxHeap.heap.length > 0 || queue.length > 0) {
    timeTaken++;
    if (maxHeap.heap.length > 0) {
      const count = maxHeap.heappop()! - 1;

      if (count) {
        queue.push([count, timeTaken + n]);
      }
    }

    if (queue.length > 0 && queue[0][1] === timeTaken) {
      maxHeap.heappush(queue.shift()![0]);
    }
  }

  return timeTaken;
};

/**
 * Input: tasks = ["A","A","A","B","B","B"], n = 2
 * Output: 8
 * Explanation:
 *  - A -> B -> idle -> A -> B -> idle -> A -> B
 * There is at least 2 units of time between any two same tasks.
 */

const tasks = ["A", "A", "A", "B", "B", "B"];
const n = 2;

const output = leastInterval(tasks, n);

console.log(output);
