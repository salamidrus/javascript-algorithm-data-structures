function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  if (!str1) return true;

  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++;
  }

  return false;
}

isSubsequence("hello", "hello world");
isSubsequence("sing", "sting");
isSubsequence("abc", "acb"); // false, order matters
