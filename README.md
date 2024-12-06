# JavaScript Error: Cannot read properties of undefined (reading 'length')

This repository demonstrates a common JavaScript error: "Cannot read properties of undefined (reading 'length')".  The error occurs when trying to access a property (like 'length') of a variable that holds an undefined value.

## Bug

The `bug.js` file contains a function `foo` that attempts to access the `length` property of the input parameter `a`. If `a` is `undefined` or `null`, the code will throw an error.

## Solution

The `bugSolution.js` file provides a corrected version of `foo`. It explicitly checks if `a` is `undefined` or `null` before attempting to access its `length` property.  This prevents the error from occurring.

This simple example highlights the importance of robust error handling and null checks when working with potentially undefined values in JavaScript.