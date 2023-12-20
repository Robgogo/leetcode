const maxProfit = (prices) => {
  let l = 0;
  let r = l + 1;
  let profit = 0;
  while (l < prices.length && r < prices.length) {
    if (prices[l] > prices[r]) {
      l++;
      r = l + 1;
    } else {
      profit = Math.max(profit, prices[r] - prices[l]);
      r++;
    }
  }
  return profit;
};
const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
