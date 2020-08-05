import { findMax, getAgeByName, isOddOrEven } from './library';

test('Number is Odd or Even', () => {
  expect(isOddOrEven(2)).toEqual('Even');
  console.log('isOddOrEven, output: ', isOddOrEven(2));
  expect(isOddOrEven(11)).toEqual('Odd');
  console.log('isOddOrEven, output: ', isOddOrEven(11));
});

test('Get age of person by name', () => {
  expect(getAgeByName('Ron')).toEqual('12');
  console.log('getAgeByName, output: ', getAgeByName('Ron'));
});

test('Find the max number', () => {
  expect(findMax()).toEqual(5);
  console.log('findMax, output: ', findMax());
});
