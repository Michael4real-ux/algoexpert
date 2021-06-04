// SOLUTION 1
// Non-Costructible Change
// O(n log n) time | O(1) space where n is the number of coins
export function nonConstructibleChange(coins: number[]) {
  coins.sort((a, b) => a - b);

  let currentChangeCreated = 0;

  for (const coin of coins) {
    if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
  }
  return 1;
}
