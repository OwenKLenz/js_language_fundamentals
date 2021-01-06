# ARray Object Part 2

FThe function invocation will return 10. The `for` loop will correctly sum all of the elements in the array as well as the properties at `'-1'` and `'-2'` but `array.length` is 2, not 4, so all 4 `5`s will be summed and then divided by 2, resulting in 10.

This is caused by the fact that `array.length` only counts elements stored at indexes greater than or equal to 0. Negative numbers result in a "key-value" pair.

To return the correct value, you could divide the sum by `Object.keys(array).length`. This would create an array with eeach indexes and property keys so that the length would match the number of values that were summed.
