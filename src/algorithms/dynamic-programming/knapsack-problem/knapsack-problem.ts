import { KnapsackItem } from "./knapsack-problem.types";

export function knapsackProblem01(
  knapsackItems: Array<KnapsackItem>,
  maxWeight: number
): number {
  // dp[i][j] := max value from item 0 to i, with total weight no more than j
  const dp: Array<Array<number>> = Array(knapsackItems.length + 1)
    .fill(undefined)
    .map(() => Array(maxWeight + 1).fill(0));

  for (let i = 0; i < knapsackItems.length; i++) {
    for (let j = 0; j <= maxWeight; j++) {
      const currentItem = knapsackItems[i];
      if (currentItem.weight <= j) {
        dp[i + 1][j] = Math.max(
          dp[i][j],
          dp[i][j - currentItem.weight] + currentItem.value
        );
      } else {
        dp[i + 1][j] = dp[i][j];
      }
    }
  }

  return dp[knapsackItems.length][maxWeight];
}

export function knapsackProblem01SpaceOptimized(
  knapsackItems: Array<KnapsackItem>,
  maxWeight: number
): number {
  const dp: Array<number> = Array(maxWeight + 1).fill(0);

  for (let i = 0; i < knapsackItems.length; i++) {
    // note that the inner loop direction is reversed
    for (let j = maxWeight; j > 0; j--) {
      const currentItem = knapsackItems[i];
      if (currentItem.weight <= j) {
        dp[j] = Math.max(dp[j], dp[j - currentItem.weight] + currentItem.value);
      }
    }
  }

  return dp[maxWeight];
}

export function knapsackProblemUnbounded(
  knapsackItems: Array<KnapsackItem>,
  maxWeight: number
): number {
  // dp[i][j] := max value from item 0 to i, with total weight no more than j
  const dp: Array<Array<number>> = Array(knapsackItems.length + 1)
    .fill(undefined)
    .map(() => Array(maxWeight + 1).fill(0));

  for (let i = 0; i < knapsackItems.length; i++) {
    for (let j = 0; j <= maxWeight; j++) {
      const currentItem = knapsackItems[i];
      if (currentItem.weight <= j) {
        dp[i + 1][j] = Math.max(
          dp[i][j],
          dp[i + 1][j - currentItem.weight] + currentItem.value
        );
      } else {
        dp[i + 1][j] = dp[i][j];
      }
    }
  }

  return dp[knapsackItems.length][maxWeight];
}

export function knapsackProblemUnboundedSpaceOptimized(
  knapsackItems: Array<KnapsackItem>,
  maxWeight: number
): number {
  const dp: Array<number> = Array(maxWeight + 1).fill(0);

  for (let i = 0; i < knapsackItems.length; i++) {
    for (let j = 0; j <= maxWeight; j++) {
      const currentItem = knapsackItems[i];
      if (currentItem.weight <= j) {
        dp[j] = Math.max(dp[j], dp[j - currentItem.weight] + currentItem.value);
      }
    }
  }

  return dp[maxWeight];
}
