# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  await - JS runtime should wait until the asynchronous function completes
  async - declares an async function

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async/await can declare directly and returns value // promise returns a promise
  makes code look my synchronouse, it is syntactic sugar

- When do you use `async`?
  to dictate whatever function to be run later
  when await is used, async doesnt do shet

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  use await when waiting for promise to settle
  synchronous function will keep running

- How do you handle errors with `await`?
  pass function to happen if it fails
  wrap it in a try await then catch as final?

- What do `try`, `catch` and `throw` do? When do you use them?
  try - statement defines a code block to run
  catch - statement defines a code block to handle any error
  throw - statement defines a custom error.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  resolve value is lost and the promise object is returned

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await because shawn said so

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
