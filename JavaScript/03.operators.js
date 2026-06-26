// JavaScript Operators

// Operators:
// Operators are used to perform operations on values and variables.


// 1.Arithmetic Operators:
// Used to perform mathematical calculations.

// Shop Bill Calculation

let price = 150;
let quantity = 4;
let shipping = 50;

let subtotal = price * quantity;
let total = subtotal + shipping;

console.log(`Subtotal: ${subtotal}`);   // Output: 600
console.log(`Shipping: ${shipping}`);   // Output: 50
console.log(`Total: ${total}`);         // Output: 650




// 2.Assignment Operators:
// Used to assign and update variable values.

// Wallet Money Calculation

let wallet = 1000;
console.log(`Starting: ${wallet}`);     // Output: Starting: 1000

wallet += 500;
console.log(`After salary: ${wallet}`);  // Output: 1500

wallet -= 200;
console.log(`After grocery: ${wallet}`);  // Output: 1300

wallet *= 2;
console.log(`Doubled: ${wallet}`);        // Output: 2600

wallet /= 4;
console.log(`After split: ${wallet}`);    // Output: 650




// 3.Comparison Operators:
// Used to compare two values.

// Movie Ticket Age Check

const userAge = 16;
const minAge = 18;

console.log(userAge >= minAge);        // Output: false
console.log(userAge == "16");          // Output: true
console.log(userAge === "16");         // Output: false
console.log(userAge != minAge);        // Output: true
console.log(userAge < minAge);         // Output: true




// 4.Logical Operators:
// Used to combine multiple conditions.

// Job Eligibility Check

const age = 22;
const hasDegree = true;
const hasExperience = false;

// AND Operator
if (age >= 18 && hasDegree) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

// OR Operator
if (hasDegree || hasExperience) {
    console.log("Can Apply");
} else {
    console.log("Cannot Apply");
}

// NOT Operator
console.log(`Fresher: ${!hasExperience}`);    // Output: true



// 5.String Operator:
// Used to join two or more strings.

// Profile Card

const firstName = "Kalai";
const lastName = "Selvi";
const city = "Tiruppur";
const job = "Frontend Developer";

console.log(firstName + " " + lastName);      // Output: Kalai Selvi

console.log(`Name: ${firstName} ${lastName}`);
console.log(`City: ${city}`);
console.log(`Job: ${job}`);
console.log(`Profile: ${firstName} | ${city} | ${job}`);



// 6.Ternary Operator:
// Used as a short form of if...else.

// Free Delivery Check

const orderAmount = 450;
const delivery = orderAmount >= 500 ? "Free Delivery" : "Pay Rs.50 delivery";
console.log(delivery);                // Output: Pay Rs.50 delivery

// Exam Result

const marks = 72;
const result = marks >= 50 ? "Pass" : "Fail";
console.log(result);                 // Output: Pass

// Login Check

const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please login";
console.log(message);                 // Output: Welcome back!