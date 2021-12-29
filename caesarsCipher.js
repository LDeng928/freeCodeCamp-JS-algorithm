/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */

function rot13(str) {
  // Step 1: create a lookup table
  let lookup = {
    N: 'A',
    O: 'B',
    P: 'C',
    Q: 'D',
    R: 'E',
    S: 'F',
    T: 'G',
    U: 'H',
    V: 'I',
    W: 'J',
    X: 'K',
    Y: 'L',
    Z: 'M',
    A: 'N',
    B: 'O',
    C: 'P',
    D: 'Q',
    E: 'R',
    F: 'S',
    G: 'T',
    H: 'U',
    I: 'V',
    J: 'W',
    K: 'X',
    L: 'Y',
    M: 'Z',
  };
  // Step 2: turn the string to uppercase

  let upperStr = str.toUpperCase();
  console.log(upperStr);

  // Step 3: loop through the uppercase string
  // There are 2 loops using map. First loop is to get the string separated by space and second loop is to get each character inside each breakdown string
  const cipherStr = upperStr
    .split(' ')
    .map((string) => {
      return string
        .split('')
        .map((char) => (lookup[char] === undefined ? char : lookup[char]))
        .join('');
    })
    .join(' ');
  return cipherStr;
}

console.log(rot13('SERR PBQR PNZC')); // => FREE CODE CAMP

/* There is another way to solve this problem, which is to use the ASCII code. The difference is always 13. We will need to turn the string into uppercase and map through each character and minus the difference (13) to get the ciphered character's ASCII code*/
