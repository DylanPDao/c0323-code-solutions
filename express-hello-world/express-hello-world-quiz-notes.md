# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
- What is Express middleware useful for?
  execute code, make chanes to response object, end request resposne cylce, call next middleware function in the stack
- How do you mount a middleware with an Express application?
  .use(req, res, next)
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  request = res
  response = res
  next = next function

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
