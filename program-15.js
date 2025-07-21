// Simple Calculator Program

// Input values
let a = 4;
let b = 2;
let operator = '+';  // Change to '+', '-', '*', '/'

let result;

// Perform calculation based on operator
if (operator === '+') {
    result = a + b;
} else if (operator === '-') {
    result = a - b;
} else if (operator === '*') {
    result = a * b;
} else if (operator === '/') {
    result = a / b;
} else {
    console.log("Invalid operator");
}

console.log(result);
