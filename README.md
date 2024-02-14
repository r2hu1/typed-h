## Typed-H

A simple, lightweight Typewritting effect for your HTML elements.

## How to use

- Add the following script to your HTML file:
```html
<script src="https://unpkg.com/typed-h@1.1.0/typed-h.js"></script>
```

- Add the following element to your HTML file:
```html
<div id="typed-h"></div>
```

- Intialize TypedH
```js
const element = document.querySelector(".some-element-classname");
TypedH({element,speed=200,reverced=false});
```