The first two logs will log the contents of the array `['JavaScript', 'Ruby', 'Python']` and the length of that array, `3`.

After reassigning the array's length property to 4, the output will now include `<1 empty item>` at the end of the array, but the length will still be `4`.This is because empty indexes still count towards the length of an array.

After reassigning the length to `1`, the last 3 indexes will be chopped off and garbage collected, leaving an array with a length of 1 and the single value of `['JavaScript']` in it.

When the length is set back to 3, it will now contain 2 empty elements because the elements that were chopped off when setting length to 1 have been lost forever. The length will be 3 and the array logs as `['JavaScript', <2 empty items>]`

By setting the length back to 1, the empty elements are lost and when we assign index 2 of the array to `'Python'`, a new element will appear at index 2 and an empty element will exist between indexes 0 and 2.
Now when we log `languages` we get `['JavaScript', <1 empty item>, 'Python']`
The element returned by the reference to index 1 will be `undefined` because empty elements return `undefined` when they are referenced. Finally The length is 3, because the length is always equal to the greatest index in the array (2) + 1.
