# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
to help debug
- What is the purpose of events and event handling?
to make page more dynamic
- Are all possible parameters required to use a JavaScript method or function?
no, many are optional
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
.addEventListener()
- What is a callback function?
function within another function
- What object is passed into an event listener callback when the event fires?
whatever object that the .addEventListener is attached to
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
returns element where the event occured. can console.log to find out
- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```
the second one is calling a function, so it fires before the event passes.

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
