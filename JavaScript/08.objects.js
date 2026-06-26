// JavaScript Objects

// Objects:
// An object is used to store data in key-value pairs.


// 1.Student Information System
// Access Property and Modify Property

let student = {
    name: "Kalai",
    department: "B.Tech(CSBS)",
    college: "Nehru Institute of Engineering And Technology",
    age: 21,
    cgpa: 8.5,
    location: "Coimbatore"
};

// Add New Property

student.year = "Final Year";

// Display Object Properties

console.log("Student Name:", student.name);
console.log("Department:", student.department);
console.log("College:", student.college);
console.log("Age:", student.age);
console.log("CGPA:", student.cgpa);
console.log("Location:", student.location);
console.log("Year:", student.year);

// Output:
// Student Name: Kalai
// Department: B.Tech(CSBS)
// College: Nehru Institute of Engineering And Technology
// Age: 21
// CGPA: 8.5
// Location: Coimbatore
// Year: Final Year


// Modify Property

student.cgpa = 8.9;

console.log("Updated CGPA:", student.cgpa);

// Output:
// Updated CGPA: 8.9




// 2.Employee Management
// Add Property and Delete Property

let employee = {
    name: "Muthu",
    department: "IT",
    salary: 25000
};

// Add Property

employee.city = "Coimbatore";

console.log(employee);

// Delete Property

delete employee.department;

console.log(employee);

// Output:
// { name: 'Muthu', department: 'IT', salary: 25000, city: 'Coimbatore' }
// { name: 'Muthu', salary: 25000, city: 'Coimbatore' }




// 3.User Profile Checker
// Check Property Exists

let user = {
    username: "kalai",
    email: "kalai@gmail.com"
};

console.log("email" in user);
console.log("phone" in user);

// Output:
// true
// false




// 4.Product Details
// for...in Loop

let product = {
    name: "Laptop",
    price: 50000,
    stock: 10
};

for (let key in product) {
    console.log(key + " : " + product[key]);
}

// Output:
// name : Laptop
// price : 50000
// stock : 10




// 5.Employee Database
// Object.keys()

let employeeDB = {
    id: 101,
    name: "Kalai",
    department: "IT",
    salary: 30000
};

console.log("Total Properties:", Object.keys(employeeDB).length);

// Output:
// Total Properties: 4




// 6.Product Details
// Object.values()

let product2 = {
    name: "Phone",
    price: 20000,
    brand: "Samsung"
};

console.log(Object.values(product2));

// Output:
// ["Phone", 20000, "Samsung"]




// 7.Array of Objects

let students = [
    { name: "Kalai", marks: 85 },
    { name: "Selvi", marks: 90 },
    { name: "Muthu", marks: 78 }
];

students.forEach(student => {
    console.log(student.name + " scored " + student.marks);
});

// Output:
// Kalai scored 85
// Selvi scored 90
// Muthu scored 78




// 8.Toppers Above 80 Marks

let toppers = students.filter(student => student.marks > 80);

console.log("Toppers:", toppers);

// Output:
// Toppers:
// [
//   { name: 'Kalai', marks: 85 },
//   { name: 'Selvi', marks: 90 }
// ]