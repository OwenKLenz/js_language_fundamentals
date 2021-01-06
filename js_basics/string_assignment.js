// Take a look at the following code:

let name = 'Bob';
const saveName = name;
name = 'Alice';
console.log(name, saveName);

// What does this code log to the console? Think about it for a moment before continuing.

  // If you said that this code logged:

  Alice Bob
// you would be 100% correct, and the answer should come as no surprise. Now let's look at something slightly different:

const name = 'Bob';
const saveName = name;
name.toUpperCase();
console.log(name, saveName);

// What does this code log? Can you explain these results?

// It logs 'Bob Bob' because saveName is initialized to referenc the same string that name is referencing. Then name calls toUpperCase() which returns a new string but doesn't mutate the caller, meaning that both name and saveName both still reference 'Bob'.

// Further Exploration

// If you take another look at the code, you'll notice that on line 3, the string referenced by the name variable calls the String.prototype.toUpperCase method. How is it possible that even though this string is a primitive, it's still able to call a method?

// According to MDN documentation, "JavaScript automatically converts primitives to String objects, so that it's possible to use String object methods for primitive strings. In contexts where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the method or perform the property lookup."
// So string primitives (string literals and strings created using String()) automatically get converted to String objects when an instance method is called by them.
