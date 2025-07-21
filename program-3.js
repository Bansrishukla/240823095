// Program to check if a year is a leap year

// Input year
let year = 2020;

// Check leap year condition
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}
