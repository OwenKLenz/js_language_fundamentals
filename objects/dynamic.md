# Dynamic

The first log will output `'678'` and the second will output`'456'`.

### Further Exploration

`"{ 'funcProp': 'hello' }"` will be logged the first time, because the property assignment on line 2 creates a new property with a key eqaul to the return value of the `myFunc` invocation, "funcProp" and a value of "hello, "

The second time `{ 'funcProp': 'world!' }` will be logged because the code on line 9 reassigns the key equal to the return value of `myFunc()` (`'funcProp'`) to the value `'world!'`.
