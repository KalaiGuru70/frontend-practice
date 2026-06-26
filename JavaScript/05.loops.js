// JavaScript Loops

// Loops:
// Loops are used to execute a block of code repeatedly.

// for Loop:
// Used when the number of iterations is known.

// 1.Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Output: 1 2 3 4 5 6 7 8 9 10


// Print numbers from 10 to 1

for (let i = 10; i >= 1; i--) {
    console.log(i);
}
// Output: 10 9 8 7 6 5 4 3 2 1



// 2.while Loop:
// Executes the block while the condition is true.

// Print numbers from 1 to 5

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
// Output: 1 2 3 4 5




// 3.do...while Loop:
// Executes the block at least once before checking the condition.

// Print numbers from 1 to 5

i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
// Output: 1 2 3 4 5


// Print Even Numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
// Output: 2 4 6 8 10 12 14 16 18 20




// 4.Print Odd Numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
// Output: 1 3 5 7 9 11 13 15 17 19


// 5.Multiplication Table of 5

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}
// Output:
// 5 x 1 = 5
// ...
// 5 x 10 = 50



// 6.Sum of Numbers from 1 to 100

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);
// Output: 5050


// 7.break Statement:
// Stops the loop immediately.

// Print numbers from 1 to 5, but stop at 5

for (let i = 1; i <= 5; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}
// Output: 1 2 3 4


// 8.continue Statement:
// Skips the current iteration.

// Print numbers from 1 to 10, but skip 5

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
// Output: 1 2 3 4 6 7 8 9 10


// 9.Number Pattern

for (let i = 1; i <= 5; i++) {
    let result = "";

    for (let j = 1; j <= i; j++) {
        result = result + j;
    }

    console.log(result);
}
// Output:
// 1
// 12
// 123
// 1234
// 12345




// 10Star Pattern

for (let i = 1; i <= 5; i++) {
    let result = "";

    for (let j = 1; j <= i; j++) {
        result = result + "*";
    }

    console.log(result);
}
// Output:
// *
// **
// ***
// ****
// *****



// 11.Reverse Star Pattern

for (let i = 5; i >= 1; i--) {
    let result = "";

    for (let j = 1; j <= i; j++) {
        result = result + "*";
    }

    console.log(result);
}
// Output:
// *****
// ****
// ***
// **
// *