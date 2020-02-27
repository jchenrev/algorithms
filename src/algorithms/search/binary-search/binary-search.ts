/**
 * @returns the index of element that equals to target
 */
export function binarySearch(arr: Array<number>, target: number): number {
  let [lo, hi] = [0, arr.length - 1];
  while (lo <= hi) {
    const midIndex = Math.floor((lo + hi) / 2);
    const midValue = arr[midIndex];
    if (target < midValue) {
      hi = midIndex - 1;
    } else if (target > midValue) {
      lo = midIndex + 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

/**
 * @returns the index of the first element larger than or equal to target
 * @see http://www.cplusplus.com/reference/algorithm/lower_bound/
 */
export function lowerBound(arr: Array<number>, target: number): number {
  let [lo, hi] = [0, arr.length];
  while (lo < hi) {
    const midIndex = Math.floor((lo + hi) / 2);
    const midValue = arr[midIndex];
    if (target <= midValue) {
      hi = midIndex;
    } else {
      lo = midIndex + 1;
    }
  }
  if (lo === arr.length) {
    return -1;
  }
  return lo;
}

/**
 * @returns the index of the first element larger than to target
 * @see http://www.cplusplus.com/reference/algorithm/upper_bound/
 */
export function upperBound(arr: Array<number>, target: number): number {
  let [lo, hi] = [0, arr.length];
  while (lo < hi) {
    const midIndex = Math.floor((lo + hi) / 2);
    const midValue = arr[midIndex];
    if (target < midValue) {
      hi = midIndex;
    } else {
      lo = midIndex + 1;
    }
  }
  if (lo === arr.length) {
    return -1;
  }
  return lo;
}
