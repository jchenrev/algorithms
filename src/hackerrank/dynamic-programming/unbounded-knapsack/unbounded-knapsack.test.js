import unboundedKnapsack from "./unbounded-knapsack";

describe("Knapsack", () => {
  test.each([
    [12, [1, 6, 9], 12],
    [9, [3, 4, 4, 4, 8], 9],
    [1, Array(2000).fill(2), 0]
  ])("should solve unbounded knapsack problem", (k, arr, result) => {
    expect(unboundedKnapsack(k, arr)).toBe(result);
  });
});
