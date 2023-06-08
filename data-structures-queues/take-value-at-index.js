export default function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    for (let i = 0; i < index; i++) {
      const value = queue.dequeue();
      queue.enqueue(value);
    }
    const valueAtIndex = queue.dequeue();
    return valueAtIndex;
  }
}
