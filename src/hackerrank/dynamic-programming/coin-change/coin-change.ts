/**
 *
 * @param n target sum
 * @param c array of available type of coins
 * @returns the number of ways to get to target sum
 */
function getWays(n: number, c: Array<number>): number {
  const dp = Array(n + 1).fill(0);

  for (let i = 0; i < c.length; i++) {
    for (let j = 0; j <= n; j++) {
      if (c[i] <= j) {
        dp[j] = Math.max(dp[j], dp[j - c[i]] + 1);
      }
    }
  }

  return dp[n];
}

export default getWays;
