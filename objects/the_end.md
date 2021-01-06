# The End is Near But Not Here

Because the element reference is trying to reference a negative index, it is treated as a parameter name and since no value is associated with the `'-2'` key, `undefined` will be returned.

To fix this:

```js
function penultimate(string) {
  let words = string.split(' ');
  return words[words.length - 2];
}
```
