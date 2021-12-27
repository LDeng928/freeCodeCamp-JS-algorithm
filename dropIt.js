/* Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array. */

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// Test case 1
console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
); // => [1, 0, 1]

// Test case 2
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
); // => [3, 4]
