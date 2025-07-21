// Program to reverse a number

// Input number
let num = 1234;

// Convert number to string, reverse it, and convert back to number
let reversed = Number(num.toString().split('').reverse().join(''));

// Output the reversed number
console.log(reversed);
