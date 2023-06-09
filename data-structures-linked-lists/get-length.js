export default function getLength(list) {
  let node = list;
  let count = 0;
  while (node) {
    node = node.next;
    count++;
  }
  return count;
}
