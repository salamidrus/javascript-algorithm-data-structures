function recursiveRange(num) {
  if (num < 1) return 0;

  return num + recursiveRange(num - 1);
}

recursiveRange(4); // 10
