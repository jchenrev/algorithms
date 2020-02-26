function levenshteinDistance(a: string, b: string): number {
  const dp: Array<Array<number>> = [];

  // dp[i][j] := the edit distance of a[0]...a[i] and b[0]...b[j]
  dp.push(
    Array(b.length + 1)
      .fill(undefined)
      .map((_, index) => index)
  );
  for (let i = 0; i < a.length; i++) {
    dp.push([i + 1, ...Array(b.length).fill(0)]);
  }

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      dp[i + 1][j + 1] = Math.min(
        dp[i][j + 1] + 1,
        dp[i + 1][j] + 1,
        dp[i][j] + +(a[i] !== b[j])
      );
    }
  }

  return dp[a.length][b.length];
}

export default levenshteinDistance;
