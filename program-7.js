// Program to check if a number is a palindrome

// Input number
let num = 121;

// Reverse the number (convert to string, reverse, and convert back)
let reversed = Number(num.toString().split('').reverse().join(''));

// Check if original and reversed are same
if (num === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}
