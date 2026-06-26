// JavaScript Arrays

// Arrays:
// An array is used to store multiple values in a single variable.


// 1.Student Management System

let marks = [66, 78, 90, 88, 95];

// Add New Mark

marks.push(76);

// Display All Marks

console.log("All Marks:");

marks.forEach(mark => {
    console.log(mark);
});

// Output:
// All Marks:
// 66
// 78
// 90
// 88
// 95
// 76

// Total Marks

let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log("Total Marks:", total);
// Output: Total Marks: 493

// Average Marks

let average = total / marks.length;
console.log("Average Marks:", average);
// Output: Average Marks: 82.16666666666667

// Passed Students

let passed = marks.filter(mark => mark >= 35);
console.log("Passed Marks:", passed);
// Output: Passed Marks: [66, 78, 90, 88, 95, 76]

// Add Grace Marks

let graceMark = marks.map(mark => mark + 5);
console.log("Grace Marks:", graceMark);
// Output: Grace Marks: [71, 83, 95, 93, 100, 81]

// Highest Mark

let highest = Math.max(...marks);
console.log("Highest Mark:", highest);
// Output: Highest Mark: 95



// 2.Shopping Cart System

let carts = [1000, 1500, 600, 550, 3000];

// Add New Item

carts.push(700);

// View All Items

console.log("Shopping Cart:");

carts.forEach(item => {
    console.log(item);
});

// Output:
// Shopping Cart:
// 1000
// 1500
// 600
// 550
// 3000
// 700

// Total Bill

let totalBill = carts.reduce((sum, item) => sum + item, 0);
console.log("Total Bill:", totalBill);
// Output: Total Bill: 7350

// Apply 10% Discount

let discount = carts.map(item => item - (item * 0.10));
console.log("After Discount:", discount);
// Output: After Discount: [900, 1350, 540, 495, 2700, 630]

// Products Above 1000

let costly = carts.filter(item => item > 1000);
console.log("Products Above 1000:", costly);
// Output: Products Above 1000: [1500, 3000]



// 3.Employee Salary Management

let salaries = [20000, 25000, 30000, 18000];

// Add Employee Salary

salaries.push(35000);

// Total Salary Expense

let totalSalary = salaries.reduce((sum, salary) => sum + salary, 0);
console.log("Total Salary:", totalSalary);
// Output: Total Salary: 128000

// Salary Increment

let updatedSalary = salaries.map(salary => salary + 2000);
console.log("Updated Salary:", updatedSalary);
// Output: Updated Salary: [22000, 27000, 32000, 20000, 37000]

// Salary Above 25000

let highSalary = salaries.filter(salary => salary > 25000);
console.log("Salary Above 25000:", highSalary);
// Output: Salary Above 25000: [30000, 35000]



// 4.Find First Salary Above 30000

let salaryList = [18000, 22000, 35000, 34000, 32000, 45000];

let highSalaryPerson = salaryList.find(salary => salary > 30000);

console.log("First Salary Above 30000:", highSalaryPerson);
// Output: First Salary Above 30000: 35000



// 5.Rank List System

let rank = [88, 78, 98, 67, 45, 79, 99];

// Sort Marks in Descending Order

let rankedList = [...rank].sort((a, b) => b - a);

console.log("Rank List:", rankedList);
// Output: Rank List: [99, 98, 88, 79, 78, 67, 45]

// Topper

console.log("Topper:", rankedList[0]);
// Output: Topper: 99