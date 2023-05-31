# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.
- What values can be stored in context?
  current amount, number; routing, components, states
- How do you create context and make it available to the components?
  import { createContext } from 'react';
  createContext(variable)
- How do you access the context values?
  UseContext()
- When would you use context? (in addition to the best answer: "rarely")
  when you want to pass a value to a children thats deep down or theres something being iterated many times

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
