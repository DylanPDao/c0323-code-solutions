export default function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const pop1 = stack.pop();
  stack.push(value);
  stack.push(pop1);
}
