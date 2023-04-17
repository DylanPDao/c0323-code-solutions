# javascript-this-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is `this` in JavaScript?
'this' is determined at call time, typically the object to the left of the dot when a function is called as a method.
- What does it mean to say that `this` is an "implicit parameter"?
it is not stated directly between the braces
- _When_ is the value of `this` determined in a function; **call time** or **definition time**?
call time
- What does `this` refer to in the following code snippet?
    ```js
    const character = {
      firstName: 'Mario',
      greet: function () {
        const message = 'It\'s-a-me, ' + this.firstName + '!';
        console.log(message);
      }
    };
    ```
'this' is equal to the object character
- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    character.greet();
    ```
It's-a-me, Mario!
- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    const hello = character.greet;
    hello();
    ```
It's-a-me, undefined! when character.greet() is being called it is running inside the object, but when hello() is called it has no parameters
- How can you tell what the value of `this` will be for a particular function or method **definition**?
for method definition it'll be put inside the object, so the overarching object and its particular property will be the 'this'
- How can you tell what the value of `this` is for a particular function or method **call**?
object on left side of period is the 'this'

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
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
  width:100%
}
```
