/* A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num. */

// Utility function to check if a number is a Prime number
function isPrime(num) {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

// Sum all the prime number
function sumPrimes(num) {
  let allPrimeNumbers = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      allPrimeNumbers.push(i);
    }
  }
  // Use reduce function to get the sum
  return allPrimeNumbers.reduce((accumulated, currentValue) => accumulated + currentValue);
}

console.log(sumPrimes(977)); // => 73156
