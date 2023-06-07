export default function maxValue(stack) {
  let biggestNumber = stack.peek();
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  while (stack.peek() !== undefined) {
    const popped = stack.pop();
    if (popped > biggestNumber) {
      biggestNumber = popped;
    }
  }
  return biggestNumber;
}
