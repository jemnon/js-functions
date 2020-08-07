/**
 * Find the largest item in an unsorted array.
 * Time Complexity: 3(n) + 2
 * Big O Notation: O(n)
 * @param {Array} list
 * @return {Number} - highest number in unsorted array.
 */

const findMax = (list: number[] = [5, 3, 4, 2]): Number => {
  let max = null;
  let counter = 0;
  list.forEach((item, idx) => {
    counter++;
    if (max === null || max < list[idx]) {
      max = list[idx];
    }
  });
  console.log('counter: ', counter);
  return max;
};

interface People {
  [key: string]: string;
}

const people: People = {
  Ron: '12',
  Bill: '34',
  Horace: '42',
  Roger: '55',
};

/**
 * `Look-up table` to get age by name. Constant Time - 0(1)
 * @param {String} name
 * @return Age of person
 */
const getAgeByName = (name: string): string => {
  return people[name];
};

/**
 * Odd Or Even. Constant Time - O(1)
 * @param {Number} n is input
 * @return {String} Odd or Even
 */
const isOddOrEven = (n: number): string => {
  return n % 2 ? 'Odd' : 'Even';
};

/**
 * Recursive Binary Search.
 * Time Complexity:
 * Big O Notation (Runtime): O(log n)
 * @param {Array} list of sorted elements
 * @param {Number | String} search value to search for
 * @param {Number} offset to keep track of the list's original index
 * @return index of the found element or -1 if not found
 */
const recursiveBinarySearch = (
  list: number[] | string[],
  search: number | string,
  offset = 0,
): number => {
  // divide search in half
  // @ts-ignore
  const half = parseInt(list.length / 2, 10);
  // store's the half currently being searched in
  const current = list[half];
  if (current === search) {
    return offset + half;
  } else if (list.length === 1) {
    // return -1 if search value is not found
    return -1;
  } else if (search > current) {
    const right = list.slice(half);
    return recursiveBinarySearch(right, search, offset + half);
  }
  const left = list.slice(0, half);
  return recursiveBinarySearch(left, search, offset);
};

export { findMax, getAgeByName, isOddOrEven, recursiveBinarySearch };
