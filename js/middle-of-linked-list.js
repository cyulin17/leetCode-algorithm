var middleNode = function (head) {
  let end = head;
  while (end !== null && end.next !== null) {
    head = head.next;
    end = end.next.next;
  }
  return head;
};
middleNode([1, 2, 3, 4, 5]);
