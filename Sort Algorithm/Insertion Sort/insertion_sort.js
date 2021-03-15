function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    // console.log(currentVal);
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log(j, arr[j], currentVal);
      arr[j + 1] = arr[j];
      //   console.log(j, arr[j + 1], arr[j], currentVal);
    }
    console.log(j, "--j");
    arr[j + 1] = currentVal;
    console.log(arr);
  }

  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
