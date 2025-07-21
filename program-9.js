// Program to check if a number is Prime

// Input number
let num = 11;
let isPrime = true;

// Numbers less than 2 are not prime
if (num < 2) {
    isPrime = false;
} else {
    // Check divisors from 2 to sqrt(num)
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

// Output result
if (isPrime) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}
