import levenshteinDistance from "./levenshtein-distance";

describe("Levenshtein Distance", () => {
  test.each([
    ["", "", 0],
    ["a", "", 1],
    ["", "a", 1],
    ["abc", "", 3],
    ["", "abc", 3],
    // Should just add I to the beginning.
    ["islander", "slander", 1],
    // Needs to substitute M by K, T by M and add an A to the end
    ["mart", "karma", 3],
    // Substitute K by S, E by I and insert G at the end.
    ["kitten", "sitting", 3],
    // Should add 4 letters FOOT at the beginning.
    ["ball", "football", 4],
    // Should delete 4 letters FOOT at the beginning.
    ["football", "foot", 4],
    // Needs to substitute the first 5 chars: INTEN by EXECU
    ["intention", "execution", 5]
  ])(
    "edit distance between %p and %p is %p",
    (a: string, b: string, expectedResult: number) => {
      expect(levenshteinDistance(a, b)).toBe(expectedResult);
    }
  );
});
