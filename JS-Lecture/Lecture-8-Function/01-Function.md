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


6. **Anonymous Functions**
An anonymous function is a function without a name, typically assigned to a variable or used as a callback.

**Example:**

const add = function (a, b) {
    return a + b;
};

console.log(add(2, 3)); // Output: 5
