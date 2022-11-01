function maxProfit(prices) {
  let maxProfit = 0;
  let min = prices[0];
  for (let i = 1; i <= prices.length - 1; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    if (prices[i] > min && prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
  }
  return maxProfit;
}
maxProfit([3, 2, 7, 1, 4]);
