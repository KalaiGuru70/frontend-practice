// JavaScript Conditions

// Conditions:
// Conditions are used to execute different blocks of code based on a condition.

// if...else Statement:
// Executes one block if the condition is true, otherwise executes another block.

// 1.Age Check

const age = 22;

if (age >= 18) {
    console.log("Adult");       // Output: Adult
} else {
    console.log("Minor");
}




// 2.else if Statement:
// Used to check multiple conditions.

// Grade Check

const mark = 85;

if (mark >= 90) {
    console.log("A Grade");
} else if (mark >= 75) {
    console.log("B Grade");       // Output: B Grade
} else if (mark >= 60) {
    console.log("C Grade");
} else {
    console.log("Fail");
}




// 3.if Statement:
// Executes a block of code only if the condition is true.

// Temperature Check

let temp = 60;

if (temp > 35) {
    console.log("Hot");           // Output: Hot
} else if (temp >= 20 && temp <= 35) {
    console.log("Normal");
} else {
    console.log("Cold");
}