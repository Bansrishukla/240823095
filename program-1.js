// 1. Check Even or Odd
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Test the function
let number = 7;
let result = checkEvenOdd(number);
console.log(`The number ${number} is ${result}.`);
