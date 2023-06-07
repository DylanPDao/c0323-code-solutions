export default function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const pop1 = stack.pop();
  if (stack.peek() === undefined) {
    stack.push(pop1);
    return undefined;
  }
  const value2 = stack.peek();
  stack.push(pop1);
  return value2;
}
