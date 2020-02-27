import getWays from "./coin-change";

describe("Coin Change", () => {
  test.each([
    [4, [1, 2, 3], 4],
    [10, [2, 5, 3, 6], 5]
  ])("should solve coin change problem", (n, c, result) => {
    expect(getWays(n, c)).toBe(result);
  });
});
