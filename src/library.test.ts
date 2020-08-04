import { getAgeByName, isOddOrEven } from './library';

test('Number is Odd or Even', () => {
  expect(isOddOrEven(2)).toEqual('Even');
  console.log('log: ', isOddOrEven(2));
  expect(isOddOrEven(11)).toEqual('Odd');
  console.log('log: ', isOddOrEven(11));
});

test('Get age of person by name', () => {
  expect(getAgeByName('Ron')).toEqual('12');
  console.log('log: ', getAgeByName('Ron'));
});
