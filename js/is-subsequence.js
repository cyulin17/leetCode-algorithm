function isSubsequence(s, t) {
  let i = 0;
  let j = 0;
  while (i <= s.length && j <= t.length) {
    if (s[i] === t[j]) {
      i++;
      j++;
    } else if (i < s.length && j === t.length) {
      return false;
    } else {
      j++;
    }
  }
  return true;
}
isSubsequence('abc', 'ahbdhc');
