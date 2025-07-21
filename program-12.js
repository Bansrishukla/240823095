// Program to check if a number is an Armstrong Number

// Input number
let num = 153;
let originalNum = num;

// Count digits
let digits = num.toString().length;

// Calculate sum of each digit raised to the power of digits
let sum = 0;
while (num > 0) {
    let digit = num % 10;
    sum += Math.pow(digit, digits);
    num = Math.floor(num / 10);
}

// Check Armstrong condition
if (sum === originalNum) {
    console.log("Armstrong");
} else {
    console.log("Not Armstrong");
}
