function levenshteinDistance(a: string, b: string): number {
  const dp: Array<Array<number>> = [];

  // initialise dp to be a (a.length + 1) * (b.length + 1) 2d array
  dp.push(
    Array(b.length + 1)
      .fill(0)
      .map((_, index) => index)
  );
  for (let i = 1; i < a.length + 1; i++) {
    dp.push([i, ...Array(b.length).fill(0)]);
  }

  // calculate each cell in the matrix from left to right, top to bottom
  for (let i = 1; i < a.length + 1; i++) {
    for (let j = 1; j < b.length + 1; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + +(a[i - 1] !== b[j - 1])
      );
    }
  }

  return dp[a.length][b.length];
}

export default levenshteinDistance;
