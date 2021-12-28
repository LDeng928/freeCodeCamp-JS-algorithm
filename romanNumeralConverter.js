/* Convert the given number into a roman numeral. */

function convertToRoman(num) {
  // Step 1: create a new string to store the roman characters
  let romanStr = '';
  // Step 2: create a new object to store the basic roman character
  // You will need to create the ones that are at the threshold
  let lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  // Step 3: loop through the number and update the roman string
  for (let i in lookup) {
    while (num >= lookup[i]) {
      romanStr += i;
      num -= lookup[i];
    }
  }
  return romanStr;
}

console.log(convertToRoman(36));
