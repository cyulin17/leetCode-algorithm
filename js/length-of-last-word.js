function lengthOfLastWord(s) {
  const words = s.split(' ').filter(word => word !== '');
  const lengthOfLastWord = words[words.length - 1].length;
  return lengthOfLastWord;
}
lengthOfLastWord('Hello World');
