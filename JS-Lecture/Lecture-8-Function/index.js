// Function to find the maximum of two numbers
function findMax(num1, num2) {
    // Compare num1 and num2
    if (num1 > num2) {
        return num1; // Return num1 if it is greater
    } else {
        return num2; // Return num2 otherwise
    }
}
// Example Usage
console.log(findMax(10, 20)); // Output: 20





// Function to calculate the factorial of a number
function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Recursive case: n * factorial of (n-1)
        return n * factorial(n - 1);
    }
}
// Example Usage
console.log(factorial(5)); // Output: 120





// Function to check if a number is even
function isEven(number) {
    // Return true if the number is divisible by 2, otherwise false
    return number % 2 === 0;
}
// Example Usage
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false
