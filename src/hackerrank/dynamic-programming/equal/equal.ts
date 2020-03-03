/**
 * https://www.hackerrank.com/challenges/equal/problem
 *
 * @param arr the initial number of chocolates each colleague has
 * @returns  minimum number of operations needed so that every colleague has
 * the same number of chocolates
 */
function equal(arr: Array<number>): number {
  const minValue = Math.min(...arr);
  const possibleResults: Array<number> = Array(5).fill(0);
  const minOperations = (value: number): number => {
    const q5 = Math.floor(value / 5);
    const r5 = value - q5 * 5;
    const q2 = Math.floor(r5 / 2);
    const r2 = r5 - q2 * 2;
    return q5 + q2 + r2;
  };

  arr.forEach(value => {
    for (let i = 0; i < 5; i++) {
      const interval = value - minValue + i;
      const minOps = minOperations(interval);
      possibleResults[i] += minOps;
    }
  });

  return Math.min(...possibleResults);
}

export default equal;
