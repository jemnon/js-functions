import {
  findMax,
  getAgeByName,
  isOddOrEven,
  recursiveBinarySearch,
} from './library';

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

test('Find the search value', () => {
  const list1 = [1, 2, 3, 4, 5, 6, 7, 8];
  const list1Search = 5;
  const list2 = [15, 16, 17, 18, 19, 20];
  const list2Search = 50;
  expect(recursiveBinarySearch(list1, list1Search)).toEqual(4);
  console.log(
    'recursiveBinarySearch, output: ',
    recursiveBinarySearch(list1, list1Search),
  );
  expect(recursiveBinarySearch(list2, list2Search)).toEqual(-1);
  console.log(
    'recursiveBinarySearch, output: ',
    recursiveBinarySearch(list2, list2Search),
  );
});
