/**
 * Find the largest item in an unsorted array.
 * Time Complexity: 3(n) + 2
 * Big O Notation: O(n)
 * @param list
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

export { findMax, getAgeByName, isOddOrEven };
