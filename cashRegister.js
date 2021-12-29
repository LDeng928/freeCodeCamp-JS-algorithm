/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency. */

function checkCashRegister(price, cash, cid) {
  // Create an object to store the numeric amount to each money unit
  const UNIT_AMOUNT = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    'ONE HUNDRED': 100.0,
  };

  // 1. Calculate the change amount
  let change = cash - price;

  // 2. Calculate the total amount left in the case-in-drawer
  let totalAmountLeft = 0;
  for (let element of cid) {
    totalAmountLeft += element[1];
  }
  // Convert to 2 decimal
  totalAmountLeft = totalAmountLeft.toFixed(2);

  // 3. New array to store required changes
  const changeArr = [];

  // 4. Perform comparison and produce output
  if (change > totalAmountLeft) {
    return { status: 'INSUFFICIENT_FUNDS', change: changeArr };
  } else if (change.toFixed(2) === totalAmountLeft) {
    return { status: 'CLOSED', change: cid };
  } else {
    // reverse cid
    cid = cid.reverse();
    // loop through the reversed cid
    for (let element of cid) {
      let temp = [element[0], 0];
      // while loop inside
      while (change >= UNIT_AMOUNT[element[0]] && element[1] > 0) {
        temp[1] += UNIT_AMOUNT[element[0]]; // store money amount in the temp array
        element[1] -= UNIT_AMOUNT[element[0]]; // update cash-in-drawer with money unit
        change -= UNIT_AMOUNT[element[0]]; // update the change amount
        change = change.toFixed(2);
      }

      // If there is value in the temporary array, push to the changeArr
      if (temp[1] > 0) {
        changeArr.push(temp);
      }
    }
  }

  // 5. Check for straight case
  if (change > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  // 6. Return output
  return { status: 'OPEN', change: changeArr };
}

console.log(
  checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
);
