export default function getTail(list) {
  let lastNode = list;
  if (lastNode) {
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
  }
  return lastNode.data;
}
