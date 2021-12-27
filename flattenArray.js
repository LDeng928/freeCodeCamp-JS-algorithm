/* Flatten a nested array. You must account for varying levels of nesting. */

function steamrollArray(arr) {
  // Use reduce and recursion to flatten the array
  // Recursion will make sure all levels of array will be reached
  return arr.reduce((accumulated, currentValue) => {
    if (currentValue instanceof Array) {
      return accumulated.concat(steamrollArray(currentValue));
    } else {
      accumulated.push(currentValue);
      return accumulated;
    }
  }, []);
}

// Test case
console.log(steamrollArray([1, [2], [3, [[4]]]])); // => [1, 2, 3, 4]
