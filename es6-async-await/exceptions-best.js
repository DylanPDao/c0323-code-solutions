import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log the entire error so that
  // you get the stack trace.
  const response = await fetch('foo');
  console.log(elapsed(), 'fetchOne:', response);
}

async function throwSeveral() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.
  const response = await fetch('foo1');
  console.log(elapsed(), 'fetchSeveral1:', response);
  const response1 = await fetch('foo2', true);
  console.log(elapsed(), 'fetchSeveral2:', response1);
  const response2 = await fetch('foo3', true);
  console.log(elapsed(), 'fetchSeveral3:', response2);
}

async function throwChained() {
  const response = await fetch('foo-chained', true);
  console.log(elapsed(), 'fetchSeveral1:', response);
  const response1 = await fetch(response, true);
  console.log(elapsed(), 'fetchSeveral2:', response1);
  const response2 = await fetch(response1, true);
  console.log(elapsed(), 'fetchSeveral3:', response2);
}

try {
  await throwOnce();
  await throwSeveral();
  await throwChained();
} catch (error) {
  console.error(elapsed(), 'Thrown Error:', error.message);
}
