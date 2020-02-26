import {
  knapsackProblem01,
  knapsackProblem01SpaceOptimized,
  knapsackProblemUnbounded,
  knapsackProblemUnboundedSpaceOptimized
} from "./knapsack-problem";

describe("Knapsack Problem", () => {
  it("should solve 0/1 knapsack problem", () => {
    const knapsackItems = [
      { value: 1, weight: 1 },
      { value: 4, weight: 3 },
      { value: 5, weight: 4 },
      { value: 7, weight: 5 }
    ];

    expect(knapsackProblem01(knapsackItems, 7)).toBe(9);
    expect(knapsackProblem01SpaceOptimized(knapsackItems, 7)).toBe(9);
  });

  it("should solve 0/1 knapsack problem regardless of items order", () => {
    const knapsackItems = [
      { value: 5, weight: 4 },
      { value: 1, weight: 1 },
      { value: 7, weight: 5 },
      { value: 4, weight: 3 }
    ];

    expect(knapsackProblem01(knapsackItems, 7)).toBe(9);
    expect(knapsackProblem01SpaceOptimized(knapsackItems, 7)).toBe(9);
  });

  it("should solve 0/1 knapsack problem with impossible items set", () => {
    const knapsackItems = [
      { value: 5, weight: 40 },
      { value: 1, weight: 10 },
      { value: 7, weight: 50 },
      { value: 4, weight: 30 }
    ];

    expect(knapsackProblem01(knapsackItems, 7)).toBe(0);
    expect(knapsackProblem01SpaceOptimized(knapsackItems, 7)).toBe(0);
  });

  it("should solve 0/1 knapsack problem with all equal weights", () => {
    const knapsackItems = [
      { value: 5, weight: 1 },
      { value: 1, weight: 1 },
      { value: 7, weight: 1 },
      { value: 4, weight: 1 },
      { value: 4, weight: 1 },
      { value: 4, weight: 1 }
    ];

    expect(knapsackProblem01(knapsackItems, 3)).toBe(16);
    expect(knapsackProblem01SpaceOptimized(knapsackItems, 3)).toBe(16);
  });

  it("should solve unbounded knapsack problem", () => {
    const knapsackItems = [
      { value: 4, weight: 3 },
      { value: 5, weight: 4 },
      { value: 3, weight: 2 }
    ];

    expect(knapsackProblemUnbounded(knapsackItems, 7)).toBe(10);
    expect(knapsackProblemUnboundedSpaceOptimized(knapsackItems, 7)).toBe(10);
  });

  // it("should solve bounded knapsack problem", () => {
  //   const knapsackItems = [
  //     { value: 84, weight: 7, count: 3 },
  //     { value: 5, weight: 2, count: 2 },
  //     { value: 12, weight: 3, count: 1 },
  //     { value: 10, weight: 1, count: 6 },
  //     { value: 20, weight: 2, count: 8 }
  //   ];

  //   expect(knapsackProblemUnbounded(knapsackItems, 17)).toBe(84 + 84 + 20 + 10);
  // });

  // it("should solve bounded knapsack problem max weight more than sum of all items", () => {
  //   const knapsackItems = [
  //     { value: 84, weight: 7, count: 3 },
  //     { value: 5, weight: 2, count: 2 },
  //     { value: 12, weight: 3, count: 1 },
  //     { value: 10, weight: 1, count: 6 },
  //     { value: 20, weight: 2, count: 8 }
  //   ];

  //   expect(knapsackProblemUnbounded(knapsackItems, 60)).toBe(
  //     3 * 84 + 2 * 5 + 1 * 12 + 6 * 10 + 8 * 20
  //   );
  // });
});
