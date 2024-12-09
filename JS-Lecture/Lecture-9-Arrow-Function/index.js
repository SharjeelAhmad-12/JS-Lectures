// Function to calculate the factorial of a number using recursion
// If n is 0 or 1, return 1 (base case). Otherwise, calculate n * factorial(n - 1).
const factorial = n => (n === 0 || n === 1 ? 1 : n * factorial(n - 1));

// Example: Calculate and log the factorial of 5
console.log(factorial(5)); // Output: 120

// Function to check if a number is even
// If the number is divisible by 2 (remainder is 0), return true; otherwise, return false.
const isEven = number => number % 2 === 0;

// Example: Check if the number 4 is even
console.log(isEven(4)); // Output: true
// Example: Check if the number 7 is even
console.log(isEven(7)); // Output: false

// Function to calculate the square of a number
// Multiply the number by itself and return the result.
const square = num => num * num;

// Example: Calculate and log the square of 4
console.log(square(4)); // Output: 16
