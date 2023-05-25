# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  after use effect is called
- What is a React Effect?
  react hook that lets you synchronize a component with an external system
- When should you use an Effect and when should you not use an Effect?
  useeffect if you know something is gonna change in dom by changing known variable
- When do Effects run?
  every re-render with changed dependencies
- What function is used to declare an Effect?
  useEffect
- What are Effect dependencies and how do you declare them?
  Reactive values include props, state, and all the variables and functions declared directly inside your component body.
  The list of all reactive values referenced inside of the setup code.
- Why would you want to clean up from an Effect?
  cleanup function saves applications from unwanted behaviors like memory leaks by cleaning up effects. In doing so, we can optimize our application’s performance
- How do you clean up from an Effect?
  it stops whatever the useEffect is trying to do
- When does the cleanup function run?
  when component unmounts

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
