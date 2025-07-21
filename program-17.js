// Program to check if a number is a Perfect Number

// Input number
let num = 28;
let sum = 0;

// Find divisors (excluding the number itself) and sum them
for (let i = 1; i < num; i++) {
    if (num % i === 0) {
        sum += i;
    }
}

// Check if sum equals the number
if (sum === num) {
    console.log("Perfect");
} else {
    console.log("Not Perfect");
}
