# reveal_css_toggle

This repository contains a [reveal.js](https://revealjs.com/) plugin.
It enables the switching of all css styles via keyboard.

### Initialization

```js
{
    src: 'plugin/reveal-css-toggle/reveal-css-toggle.js',
    async: true,
    callback: function() { reveal_css_toggle.initialize(options) }
},
```

The options object has the following form:

```typescript
interface options {
    cssLists: string[][]; // Specifies groups of css files
    linkSelectorList: string[] // Specifies selectors for the link elements which should be updated using the current css lists
    key?: string = 'c'; // The key to press
}
```

