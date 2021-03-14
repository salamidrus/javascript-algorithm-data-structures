function productOfArray(arr) {
  if (!arr.length) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

productOfArray([1, 2, 3, 4, 5]); // 120
