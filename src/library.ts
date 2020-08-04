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
 * @return {String}
 */
const isOddOrEven = (n: number): string => {
  return n % 2 ? 'Odd' : 'Even';
};

export { getAgeByName, isOddOrEven };
