// write a function called sameFrequency.
// Given two positive integers, find out if the two numbers have the same frequency of digits

function sameFrequency(num1, num2) {
  let strNum1 = String(num1);
  let strNum2 = String(num2);

  const lookup = {};

  for (let i = 0; i < strNum1.length; i++) {
    let num = strNum1[i];

    lookup[num] ? (lookup[num] += 1) : (lookup[num] = 1);
  }

  for (let i = 0; i < strNum2.length; i++) {
    let num = strNum2[i];

    if (!lookup[num]) {
      return false;
    } else {
      lookup[num] -= 1;
    }
  }

  return true;
}

sameFrequency(334, 433);
