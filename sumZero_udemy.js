/*
From Udemy Algorithms Course

Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined if a pair does not exit.

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined
*/

const sumZero = (array) => {
  let returnArr = [];
  let index = array.length - 1;
  for(let i = 0; i < array.length; i++) {
    if(i === index) {
      break;
    }
    if(array[i] + array[index] === 0) {
      return [array[i], array[index]];
    }
    if(array[i] + array[index] > 0) {
      i--;
      index--;
    }
    if(array[i] + array[index] < 0) {
      continue;
    }
  }

  return undefined;
}