function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  if (s.length === t.length) {
    for (let i = 0; i <= s.length; i++) {
      if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
        return false;
      }
    }
    return true;
  }
}
isIsomorphic('egg', 'add');
