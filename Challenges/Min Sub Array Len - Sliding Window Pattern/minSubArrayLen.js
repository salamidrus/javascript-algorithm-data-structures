function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current windows doesn't add up to the given sum then move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }

    // if current window adds up to at least the sum given then we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2, [4,3]
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
