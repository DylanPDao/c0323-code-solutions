export default function takeTop(stack) {
  if (stack.length === 0) {
    return undefined;
  }
  const top = stack.pop();
  return top;
}
