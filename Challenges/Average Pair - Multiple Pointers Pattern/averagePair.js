function averagePair(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}

averagePair([1, 2, 4], 2.5);
