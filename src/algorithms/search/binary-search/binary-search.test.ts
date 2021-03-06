import { binarySearch, lowerBound, upperBound } from "./binary-search";

describe("Binary Search", () => {
  test.each([
    [[], 0, -1],
    [[0, 1], -1, -1],
    [[0, 1], 0, 0],
    [[0, 1], 1, 1],
    [[0, 1], 2, -1],
    [[2, 3, 4, 10, 40], -1, -1],
    [[2, 3, 4, 10, 40], 2, 0],
    [[2, 3, 4, 10, 40], 3, 1],
    [[2, 3, 4, 10, 40], 5, -1],
    [[2, 3, 4, 10, 40], 10, 3],
    [[2, 3, 4, 10, 40], 11, -1],
    [[2, 3, 4, 10, 40], 40, 4],
    [[2, 3, 4, 10, 40], 41, -1],
    [[2, 3, 4, 10, 40], 99999999, -1]
  ])("binarySearch(%p, %p) returns %p", (arr, target, resultIndex) => {
    expect(binarySearch(arr, target)).toBe(resultIndex);
  });
});

describe("Lower Bound", () => {
  test.each([
    [[], 0, -1],
    [[0, 1], -1, 0],
    [[0, 1], 0, 0],
    [[0, 1], 1, 1],
    [[0, 1], 2, -1],
    [[2, 3, 4, 10, 40], -1, 0],
    [[2, 3, 4, 10, 40], 2, 0],
    [[2, 3, 4, 10, 40], 3, 1],
    [[2, 3, 4, 10, 40], 5, 3],
    [[2, 3, 4, 10, 40], 10, 3],
    [[2, 3, 4, 10, 40], 11, 4],
    [[2, 3, 4, 10, 40], 40, 4],
    [[2, 3, 4, 10, 40], 41, -1],
    [[2, 3, 4, 10, 40], 99999999, -1]
  ])("lowerBound(%p, %p) returns %p", (arr, target, resultIndex) => {
    expect(lowerBound(arr, target)).toBe(resultIndex);
  });
});

describe("Upper Bound", () => {
  test.each([
    [[], 0, -1],
    [[0, 1], -1, 0],
    [[0, 1], 0, 1],
    [[0, 1], 1, -1],
    [[0, 1], 2, -1],
    [[2, 3, 4, 10, 40], -1, 0],
    [[2, 3, 4, 10, 40], 2, 1],
    [[2, 3, 4, 10, 40], 3, 2],
    [[2, 3, 4, 10, 40], 5, 3],
    [[2, 3, 4, 10, 40], 10, 4],
    [[2, 3, 4, 10, 40], 11, 4],
    [[2, 3, 4, 10, 40], 40, -1],
    [[2, 3, 4, 10, 40], 41, -1],
    [[2, 3, 4, 10, 40], 99999999, -1]
  ])("upperBound(%p, %p) returns %p", (arr, target, resultIndex) => {
    expect(upperBound(arr, target)).toBe(resultIndex);
  });
});
