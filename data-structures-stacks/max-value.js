export default function maxValue(stack) {
  let count = stack.peek();
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  while (stack.peek() !== undefined) {
    const popped = stack.pop();
    if (popped > count) {
      count = popped;
    }
  }
  return count;
}
