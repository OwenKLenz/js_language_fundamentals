# Array Object Part 1

The log on line 3 will output the value at index 0 in `myArray`, "a"
The log on line 4 will output `undefined`, because there is no key in the `myArray` array object of the value `'-1'`.

Now on lines 6 and 7 we add new properties to the myArray array object equivalene to `-1: 'd'` and `e: 5`. Then on line 8 we add a new element to the array at index 3, "f".

When we log `myArray[-1]`, the value stored at the key `'-1'`, 'd' will be output.
Logging `myARray['e']` will output the value stored at the key `'e'`, `5`.
Finally myArray will be logged as `[ 'a', 'b', 'c', 'f', '-1': 'd', 'e': 5 ]`
