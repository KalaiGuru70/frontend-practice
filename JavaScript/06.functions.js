// JavaScript Functions

// Functions:
// A function is a reusable block of code that performs a specific task.


// Named Function (Normal Function):
// A function with a name that can be called multiple times.


// 1.Understanding Example

function greet(name) {
    return "Hello " + name;
}

console.log(greet("Kalai"));      // Output: Hello Kalai


// Real Program - Bill Calculation

function calculateBill(price, quantity) {
    return price * quantity;
}

console.log(calculateBill(120, 3));  // Output: 360




// 2.Anonymous Function:
// A function without a name, stored in a variable.

// Understanding Example

let person = function(name) {
    return "Hello " + name;
};

console.log(person("Muthu"));       // Output: Hello Muthu


// Real Program - Calculate Discount

let calDiscount = function(price, percent) {
    return (price * percent) / 100;
};

console.log(calDiscount(1500, 10));  // Output: 150



// 3.Function Expression:
// A function stored inside a variable.

// Understanding Example

let add = function(a, b) {
    return a + b;
};

console.log(add(7, 8)); // Output: 15


// Real Program - Celsius to Fahrenheit

const celsiusToFahrenheit = function(celsius) {
    return (celsius * 9 / 5) + 32;
};

console.log(celsiusToFahrenheit(37));   // Output: 98.6




// 4.Arrow Function:
// A shorter syntax for writing functions.

// Understanding Example

let multiply = (a, b) => a * b;

console.log(multiply(6, 8)); // Output: 48


// Real Program - Even or Odd

let evenOrOdd = num => num % 2 == 0 ? "Even" : "Odd";

console.log(evenOrOdd(8));          // Output: Even
console.log(evenOrOdd(9));         // Output: Odd


// Real Program - Find Biggest Number (2 Numbers)

let bigNum = (a, b) => a > b ? a : b;

console.log(bigNum(7, 8));          // Output: 8


// Real Program - Find Biggest Number (3 Numbers)

let big = (a, b, c) =>
    a > b && a > c ? "a is big : " + a :
    b > a && b > c ? "b is big : " + b :
    "c is big : " + c;

console.log(big(4, 7, 2));          // Output: b is big : 7
console.log(big(8, 5, 3));          // Output: a is big : 8
console.log(big(10, 4, 18));        // Output: c is big : 18


// Real Program - Age Check

const isAdult = (age) => age >= 18 ? "Adult" : "Minor";

console.log(isAdult(20));           // Output: Adult
console.log(isAdult(15));          // Output: Minor




// 5.Nested Function:
// A function declared inside another function.

// Understanding Example

function outer() {

    function inner() {
        console.log("Hello");
    }

    inner();
}

outer();
// Output: Hello



// Real Program - Order Summary

function orderSummary(price, quantity) {

    function calculateTotal() {
        return price * quantity;
    }

    function applyDiscount(total) {
        return total > 500 ? total - 50 : total;
    }

    const total = calculateTotal();
    const finalPrice = applyDiscount(total);

    return `Final Price: ${finalPrice}`;
}

console.log(orderSummary(1000, 3));                // Output: Final Price: 2950