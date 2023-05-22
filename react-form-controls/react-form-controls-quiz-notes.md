# react-form-controls-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do controlled components differ from uncontrolled components?
  controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.

Controlled: bound to react component state, this allows (forces) you to store the value in state and have a callback method. If you want to do anything in react besides submitting, you probably want to use this. In my experience 95% of the time.

Uncontrolled: I just think of it as “back to vanilla html”. It’s just an html form without any react in it. This can be enough for your use case. Html 5 validation. If you want to submit through a method you probably want to pull the values using a ref.

- What are some advantages of using uncontrolled components?

No component re-renders.
Browser DOM handles the changes to the element.
Simple to use.
Keeps track of the internal state.

- What are some advantages of using controlled components?
  The UI and the data are in sync. Form data can be passed between different components.

- Which style do you prefer?
  controlled easier to grab data from useState

- What two props must you pass to an input for it to be "controlled"?
  useState so index and set function

- What are some popular npm packages for creating forms in React?
  react hook form, formilk, and react final form

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
