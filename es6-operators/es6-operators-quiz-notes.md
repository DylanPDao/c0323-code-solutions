# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  `&&` = return first truthy
  `||` = return first falsy
  use as conditionals
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  left to right, as soon as answer then bounce from equation
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  returns its right-hand side operand when its left-hand side operand is null or undefined
  returns a default value, or returns boolean
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  conditional ? iftrue : if false
  one liner // ?:
  is expression can assign to something
  if/else is a statment cannot assign
  similar to if else, clean single line code
- What is the `?.` (optional chaining) operator? When would you use it?
  checks object's property or calls a function
  use it to check if object has property without throwing an error
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected
  mostly used with arrays, most objects arent iterable
- What data types can be spread into an array? Into an object?
  iterables into array, non iterables will throw an error
- How does spread syntax differ from rest syntax?
  spread expands array and elemnents, rest does the opposite

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
