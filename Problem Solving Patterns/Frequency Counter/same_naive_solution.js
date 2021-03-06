// write a function to check if arr2 contains the arr1 quadratic number
// the amount of numbers should be same

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // O(n)
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // O(n)
    if (correctIndex === -1) {
      return false;
    }

    arr2.splice(correctIndex, 1); // O(n)
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);
same([1, 2, 2, 2], [9, 1, 4, 4]); // false, different amount of numbers
