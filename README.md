## Typed-H

A simple, lightweight Typewritting effect for your HTML elements.

## How to use

- Add the following script to your HTML file:
```html
<script src="https://cdn.jsdelivr.net/gh/r2hu1/typed-h/script.js"></script>
```

- Add the following element to your HTML file:
```html
<h1 id="typed-h">Some text</h1>
```

- Intialize TypedH
```js
const element = document.querySelector(".some-element-classname");
TypedH({element,speed:200,reverced:false});
```
