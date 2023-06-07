export default function getTop(stack) {
  if (stack.length === 0) {
    return undefined;
  }
  const top = stack.peek();
  return top;
}
