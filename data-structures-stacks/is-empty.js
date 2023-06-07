export default function isEmpty(stack) {
  const peek = stack.peek();
  if (peek === undefined) {
    return true;
  } else {
    return false;
  }
}
