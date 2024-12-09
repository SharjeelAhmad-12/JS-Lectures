#### ***Functions in JavaScript***

In JavaScript, a function is a reusable block of code designed to perform a specific task. Functions allow you to organize your code, reduce repetition, and make your programs more modular.

1. **Function Syntax**
The basic syntax of a function is:

function functionName(parameters) {
    // Code to be executed
}

**Example:**

function greet() {
    console.log("Hello, world!");
}

greet(); // Output: Hello, world!


2. **Function Execution (Calling a Function)**
A function is executed (or called) by using its name followed by parentheses:

functionName(arguments);

**Example:**

function sayHello(name) {
    console.log("Hello, " + name + "!");
}

sayHello("Alice"); // Output: Hello, Alice!

3. **Function Parameters and Arguments**

**Parameters:** Placeholders specified in the function definition.
**Arguments:** Actual values passed to the function when calling it.

**Example:**

function add(a, b) {
    console.log(a + b);
}

add(5, 10); // Output: 15


4. **The return Statement**

Functions can return a value using the return keyword. The return statement ends the function execution and specifies the output.

**Example:**

function multiply(a, b) {
    return a * b;
}

let result = multiply(3, 4);
console.log(result); // Output: 12

If no return statement is used, the function returns undefined.

5. **Default Parameters**
Functions can have default values for parameters, making them optional during function calls.

**Example:**

function greet(name = "Ahmad") {
    console.log("Hello, " + name + "!");
}

greet();         // Output: Hello, Ahmad!
greet("Sharjeel");   // Output: Hello, Sharjeel!


***Types OF Functions in JavaScript***
1. **Built-in Functions**
-  JavaScript provides many built-in functions to perform common tasks. Examples include:
-  console.log(): Prints output to the console.
-  console.log("Hello, World!"); // Output: Hello, World!
-  Math.max(): Finds the maximum value from a list of numbers.
-  console.log(Math.max(10, 20, 30)); // Output: 30
-  parseInt(): Converts a string into an integer.
console.log(parseInt("42")); // Output: 42

2. **User-Defined Functions**
Functions written by developers to perform specific tasks.
**Example 1:** Simple Addition
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(3, 5)); // Output: 8

**Example 2:** Check if a Number is Even
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false

User-defined functions provide flexibility and reusability for specific tasks, complementing the built-in functionality of JavaScript.


6. **Function Expression**
A function assigned to a variable. These are not hoisted, so they must be defined before use.

**Example:**

const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(2, 3)); // Output: 6



7. **Anonymous Functions**
An anonymous function is a function without a name, typically assigned to a variable or used as a callback.

**Example:**

const add = function (a, b) {
    return a + b;
};

console.log(add(2, 3)); // Output: 5
