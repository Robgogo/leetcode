/**
 * 347. Top K Frequent Elements
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 */
const topKFrequents = (nums: number[], k: number): number[] => {
  const frequencyCounter: Map<number, number> = new Map();
  for (const num of nums) {
    if (frequencyCounter.has(num)) {
      const current: number = frequencyCounter.get(num)!;
      frequencyCounter.set(num, current + 1);
    } else {
      frequencyCounter.set(num, 1);
    }
  }
  const values: number[] = [...frequencyCounter.values()].sort((a, b) => b - a);
  const topKFrequencies: number[] = values.slice(0, k);
  const result: number[] = [];
  for (const [key, value] of frequencyCounter.entries()) {
    if (result.length < k && topKFrequencies.includes(value)) {
      result.push(key);
    }
  }
  return result;
};
console.log(topKFrequents([1], 2));
