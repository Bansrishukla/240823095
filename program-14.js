// Program to check if a character is a vowel or consonant

// Input character
let ch = 'a';

// Convert to lowercase to handle uppercase inputs
ch = ch.toLowerCase();

// Check for vowel
if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
    console.log("Vowel");
} else {
    console.log("Consonant");
}
