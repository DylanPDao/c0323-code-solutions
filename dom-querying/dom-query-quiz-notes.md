# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
lets us see what is going on in the webpage.
- What is a "model"?
standard structure
- Which "document" is being referred to in the phrase Document Object Model?
the entire web page
- What is the word "object" referring to in the phrase Document Object Model?
the things inside the webpage i.e. <div>
- What is a DOM Tree?
the layout of the webpage when it is being loaded
- Give two examples of `document` methods that retrieve a single element from the DOM.
document.getElementById()
document.querySelector()
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
document.querySelectorAll()
document.getElementByClassName()
- Why might you want to assign the return value of a DOM query to a variable?
easier to access/less to type
- What `console` method allows you to inspect the properties of a DOM element object?
console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
let the dom tree load first, then the script can access. If script is in the head then the it can't access the DOM because it hasnt been created yet
- What does `document.querySelector()` take as its argument and what does it return?
css selector and returns first matching element
- What does `document.querySelectorAll()` take as its argument and what does it return?
css selector, nodelist of everything that matches

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
