// Program to print all positive divisors of a number

// Input number
let num = 10;

// Print divisors
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        process.stdout.write(i + " ");  // print on same line
    }
}
