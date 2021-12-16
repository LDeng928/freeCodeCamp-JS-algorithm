function smallestCommons(arr) {
  // Set up - find the min and max of the array
  const [min, max] = arr.sort((a, b) => a - b);

  // Find the range between min and max
  let range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  // Find the largest possible value for SCM
  const upperBound = range.reduce((prev, cur) => prev * cur);

  // Test all multiple from max value
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    const divisible = range.every((element) => multiple % element === 0);
    if (divisible) {
      return multiple;
    }
  }
}

console.log(smallestCommons([1, 5]));
