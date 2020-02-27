/**
 * https://www.hackerrank.com/challenges/unbounded-knapsack/problem
 *
 * @param k target sum
 * @param arr numbers to select from
 * @returns the sum nearest to but not exceeding the target, with each of the
 * array element appearing 0 or more times
 */
function unboundedKnapsack(k: number, arr: Array<number>): number {
  const dp = [true, ...Array(k).fill(false)];

  for (let i = 0; i < arr.length + 1; i++) {
    for (let j = 0; j <= k; j++) {
      if (arr[i] <= j) {
        dp[j] = dp[j] || dp[j - arr[i]];
      }
    }
    if (dp[k]) {
      return k;
    }
  }

  Math.min;

  for (let j = k; j >= 0; j--) {
    if (dp[j]) {
      return j;
    }
  }
  return 0;
}

export default unboundedKnapsack;
