# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  when the list is being added to or removed based on user interaction
- Why is it important for React components to be data-driven?
  allows you to store complex forms in the database so you can reuse them in numerous developer environments.
- Where in the component code would a list of React components typically be built?
  outside the return
- What `Array` method is commonly used to create a list of React components?
  map or filter
- Why do components in a list need to have unique keys?
  Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree
- What is the best value to use as a "key" prop when rendering lists?
  Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
  Keys must not change or that defeats their purpose! Don’t generate them while rendering.

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
