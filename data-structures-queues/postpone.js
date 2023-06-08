export default function postpone(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    const value = queue.dequeue();
    queue.enqueue(value);
  }
}
