/**
 * https://www.hackerrank.com/challenges/unbounded-knapsack/problem
 *
 * @param {number} k
 * @param {Array<number>} arr
 * @returns {number}
 */
function unboundedKnapsack(k, arr) {
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

  for (let j = k; j >= 0; j--) {
    if (dp[j]) {
      return j;
    }
  }
  return 0;
}

export default unboundedKnapsack;
