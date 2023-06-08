export default function takeFront(queue) {
  const value = queue.dequeue();
  return value;
}
