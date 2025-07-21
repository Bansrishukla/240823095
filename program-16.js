// Program to find GCD (HCF) of two numbers

// Input values
let a = 20;
let b = 28;

// Euclidean Algorithm
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}

// Output the GCD
console.log(a);
