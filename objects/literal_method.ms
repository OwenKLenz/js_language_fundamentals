# Literal Method

Since `firstName` and `lastName` both reference methods, in order to get the name returned by those methods inside the template literal, you must invoke the methods by appending parentheses to them: `person.firstName()` and `person.lastName()`.

The code will log the stringified values of the methods (function objects). This appears to actually log the method definitions themselves.
