import getWays from "./coin-change";

describe("Coin Change", () => {
  test.each([
    [4, [1, 2, 3], 4],
    [10, [2, 5, 3, 6], 5],
    [
      166,
      [
        5,
        37,
        8,
        39,
        33,
        17,
        22,
        32,
        13,
        7,
        10,
        35,
        40,
        2,
        43,
        49,
        46,
        19,
        41,
        1,
        12,
        11,
        28
      ],
      96190959
    ]
  ])("should solve coin change problem %#", (n, c, result) => {
    expect(getWays(n, c)).toBe(result);
  });
});
