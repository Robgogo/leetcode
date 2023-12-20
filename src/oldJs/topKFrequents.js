const topKFrequents = (nums, k) => {
  const frequencyCounter = new Map();

  for (const num of nums) {
    if (frequencyCounter.has(num)) {
      const current = frequencyCounter.get(num);
      frequencyCounter.set(num, current + 1);
    } else {
      frequencyCounter.set(num, 1);
    }
  }

  const values = [...frequencyCounter.values()].sort((a, b) => b - a);
  const topKFrequencies = values.slice(0, k);
  const result = [];
  for (const [key, value] of frequencyCounter.entries()) {
    if (result.length < k && topKFrequencies.includes(value)) {
      result.push(key);
    }
  }
  return result;
};

console.log(topKFrequents([1], 2));
