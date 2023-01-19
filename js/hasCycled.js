function hasCycled(head) {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;

    if (head === fast) {
      return true;
    }
  }
  return false;
}
hasCycled([3, 2, 0, -4]);
