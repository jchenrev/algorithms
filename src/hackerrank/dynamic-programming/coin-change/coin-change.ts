/**
 * https://www.hackerrank.com/challenges/coin-change/problem
 *
 * @param n target sum
 * @param c array of available type of coins
 * @returns the number of ways to get to target sum
 */
function getWays(n: number, c: Array<number>): number {
  const dp = [1, ...Array(n).fill(0)];

  for (let i = 0; i < c.length; i++) {
    for (let j = 0; j <= n; j++) {
      if (c[i] <= j) {
        dp[j] = dp[j] + dp[j - c[i]];
      }
    }
  }

  return dp[n];
}

export default getWays;
