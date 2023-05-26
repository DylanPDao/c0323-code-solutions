# express-static-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of the Express Static middleware?
  The function determines the file to serve by combining req.url with the provided root directory. When a file is not found, instead of sending a 404 response, it calls next() to move on to the next middleware, allowing for stacking and fall-backs.
- What does `express.static()` return?
  returns an object
- What are several examples of static files?
  Any kind of file can be served as static content as long as it does not change in response to a user's actions or inputs. This includes images, JavaScript files, CSS files, videos, Flash files, even web pages.
- What is a good way to serve application images using Express?
  express.static()

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
