//Array Concept

// 1.Student Management System

let marks = [66,78,90,88,95];

//Add new Mark

marks.push(76);

console.log("All Marks :");

marks.forEach(mark =>{
    console.log(mark);
})

//Total Marks

let total = marks.reduce((sum ,mark) => sum+mark , 0);
console.log("Total Marks :",total);

//Average

let average = total / marks.length;
console.log("Average_Marks :",average);

//Passed Student

let Passed = marks.filter(mark => mark >= 35)
console.log("Passed_Mark :" ,Passed);

//Add Grace Mark

let Grace_Mark = marks.map(mark => mark+5);
console.log("Grace_Mark :" ,Grace_Mark);

//Highest Mark 

let highest = Math.max(...marks);
console.log("highest_mark :",highest);




//2.Shopping Cart System

let cards = [1000,1500,600,550,3000];

//Add new item

cards.push(700);

//View the item

cards.forEach(item =>{
    console.log(item);
})

//Bill Total

let total_Bill = cards.reduce((sum ,item) => sum+item ,0);
console.log("Total_Bill:",total_Bill);

//Discount

let Discount = cards.map(item => item - (item * 0.1));
console.log("After_Discount:",Discount);

//Expensive Product

let costly = cards.filter(item => item > 1000 );
console.log("Products Above 1000:",costly);




//3.Employee Salary Management

let salaries = [20000, 25000, 30000, 18000];

// Add employee salary
salaries.push(35000);

// Total salary expense
let totalSalary = salaries.reduce((sum, salary) => sum + salary,0);
console.log("Total Salary:", totalSalary);

// Salary increment
let updatedSalary = salaries.map(salary => salary + 2000);
console.log("Updated_Salary :",updatedSalary);

// Salary above 25000
let highSalary = salaries.filter(salary => salary > 25000);
console.log("Salary above 25000:",highSalary);




//4.highest Salary find()

let Salaries = [18000,22000,35000,34000,32000,45000];

let high_salary = Salaries.find(salary => salary > 30000);
console.log(" highest salary the first person:" ,high_salary);


//5.Rank list System

let Rank = [88,78,98,67,45,79,99];

let Ranked_list = [...Rank].sort((a,b)=> b-a);
console.log("Ranked_list :",Ranked_list);
console.log("Topper :" ,Ranked_list[0]);
