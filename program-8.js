// Program to check if a number is a Palindrome

// Input number
let num = 121;

// Reverse the number by converting to string
let reversed = Number(num.toString().split('').reverse().join(''));

// Check if the number is the same when reversed
if (num === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}
