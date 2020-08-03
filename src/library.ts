/**
 * Odd Or Even. Constant Time - O(1)
 * @param {Number} n is input
 * @return {String}
 */
const isOddOrEven = (n: number): string => {
  return n % 2 ? 'Odd' : 'Even'; 
}

export { isOddOrEven };