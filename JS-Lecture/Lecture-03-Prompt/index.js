// EXAMPLE OF PARSE INT
console.log("EXAMPLE OF PARSE INT");

let userInput = prompt("Enter your age:");
let age = parseInt(userInput);
console.log(age);


// EXAMPLE OF PARSE FLOAT
console.log("EXAMPLE OF PARSE FLOAT");
let userInput1 = prompt("Enter your weight in kg:");
let weight = parseFloat(userInput1);
console.log(weight);



// Example of parse using NAN

let num2 = prompt("Enter a decimal number:");
let parsedNum2 = parseFloat(num2);
if (isNaN(parsedNum2)) {
  console.log("Invalid input. Please enter a valid decimal number.");
} else {
  console.log(parsedNum2);
}