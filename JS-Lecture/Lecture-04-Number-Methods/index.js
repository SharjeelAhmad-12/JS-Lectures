// JavaScript Number Methods with Detailed Examples

// 1. Number.EPSILON - Represents the smallest difference between two representable numbers
let num1 = Number.EPSILON;
console.log(num1); // Output: 2.220446049250313e-16
// Explanation: This is the smallest difference between two representable numbers.


// 2. Number.MAX_SAFE_INTEGER - Represents the largest safe integer in JavaScript
console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
// Explanation: The largest integer that can be safely represented without rounding errors.


// 3. Number.MIN_SAFE_INTEGER - Represents the smallest safe integer in JavaScript
console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991
// Explanation: The smallest integer that can be safely represented without rounding errors.


// 4. Number.MAX_VALUE - Represents the largest positive number in JavaScript
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
// Explanation: The largest positive number that JavaScript can represent.


// 5. Number.MIN_VALUE - Represents the smallest positive number in JavaScript
console.log(Number.MIN_VALUE); // Output: 5e-324
// Explanation: The smallest positive number that JavaScript can represent.


// 6. Number.NaN - Represents a special "Not-a-Number" value
console.log(Number.NaN); // Output: NaN
// Explanation: This value represents a result that is not a valid number.


// 7. Number.POSITIVE_INFINITY - Represents positive infinity
console.log(Number.POSITIVE_INFINITY); // Output: Infinity
// Explanation: This represents a value that exceeds the largest possible number in JavaScript.


// 8. Number.NEGATIVE_INFINITY - Represents negative infinity
console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity
// Explanation: This represents a value smaller than the smallest possible number in JavaScript.


// 9. toString() - Converts a number to a string representation
let num2 = 255;
console.log(num2.toString(16)); // Output: "ff"
// Explanation: Converts the number to a hexadecimal string representation.


// 10. toFixed() - Formats a number to a specified number of decimal places
let num3 = 123.456;
console.log(num3.toFixed(2)); // Output: "123.46"
// Explanation: Rounds the number to 2 decimal places.


// 11. toExponential() - Converts a number to an exponential notation string
let num4 = 123456;
console.log(num4.toExponential(2)); // Output: "1.23e+5"
// Explanation: Converts the number to exponential notation with 2 digits after the decimal point.


// 12. toPrecision() - Formats a number to a specified precision (total number of significant digits)
let num5 = 123.456;
console.log(num5.toPrecision(4)); // Output: "123.5"
// Explanation: Rounds the number to 4 significant digits.


// 13. isFinite() - Determines if a value is a finite number
console.log(Number.isFinite(100)); // Output: true
// Explanation: 100 is a finite number, so it returns true.


console.log(Number.isFinite(Infinity)); // Output: false
// Explanation: Infinity is not a finite number, so it returns false.


// 14. isInteger() - Checks if a value is an integer
console.log(Number.isInteger(100)); // Output: true
// Explanation: 100 is an integer, so it returns true.
console.log(Number.isInteger(100.5)); // Output: false
// Explanation: 100.5 is not an integer, so it returns false.


// 15. isNaN() - Determines if a value is NaN
console.log(Number.isNaN(NaN)); // Output: true
// Explanation: NaN is explicitly checked and returns true.
console.log(Number.isNaN(123)); // Output: false
// Explanation: 123 is a valid number, so it returns false.


// 16. parseFloat() - Parses a string and converts it to a floating-point number
let str1 = "123.45px";
console.log(parseFloat(str1)); // Output: 123.45
// Explanation: Converts the string to a floating-point number, ignoring the non-numeric part.


// 17. parseInt() - Parses a string and converts it to an integer
let str2 = "123.45";
console.log(parseInt(str2)); // Output: 123
// Explanation: Converts the string to an integer by truncating the decimal part.


// 18. valueOf() - Returns the primitive value of a Number object
let num6 = new Number(123);
console.log(num6.valueOf()); // Output: 123
// Explanation: Returns the primitive value of the Number object, which is 123.
