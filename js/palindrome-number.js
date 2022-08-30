function isPalindrome(x) {
  const string = x.toString();
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
isPalindrome(10);
