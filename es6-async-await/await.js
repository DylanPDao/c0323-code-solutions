import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function fetchOnce() {
  try {
    const response = await fetch('foo/bar.html');
    console.log(elapsed(), 'fetchOnce:', response);
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchSeveral() {
  try {
    const response = await fetch('foo/bar.html');
    console.log(elapsed(), 'fetchSeveral1:', response);
    const response1 = await fetch('foo/bar.html');
    console.log(elapsed(), 'fetchSeveral2:', response1);
    const response2 = await fetch('foo/bar.html');
    console.log(elapsed(), 'fetchSeveral3:', response2);
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchChained() {
  try {
    const response = await fetch('foo/bar.html');
    console.log(elapsed(), 'fetchChained1:', response);
    const response1 = await fetch(response);
    console.log(elapsed(), 'fetchChained2:', response1);
    const response2 = await fetch(response1);
    console.log(elapsed(), 'fetchChained3:', response2);
  } catch (error) {
    console.error(error.message);
  }
}

fetchOnce()
  .then(() => fetchSeveral())
  .then(() => fetchChained());
