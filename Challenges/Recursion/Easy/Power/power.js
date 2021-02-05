// write a function called power which accepts a base and an exponent.
// the function should return the power of the base to the exponent
// this function should mimic the functionality of Math.pow()

function power(num, pow) {
  if (pow <= 0) return 1;
  return num * power(num, pow - 1);
}

power(2, 0); // 1
power(2, 2); // 4
power(2, 4); // 16
