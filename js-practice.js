//Object Concept

//1.Student Information System
//Access Property and Modify Property

let Student = {
    name : "Kalai",
    Department : "B.Tech(CSBS)",
    College : "Nehru Institute of Engineering And Technology",
    Age : 21,
    CGPA : 8.5,
    location : "Coimbatore"
}

Student.Year = "Final Year";

console.log("Student Name :", Student.name);
console.log("Department :", Student.Department);
console.log("College :", Student.College);
console.log("Age :", Student.Age);
console.log("CGPA :", Student.CGPA);
console.log("Location :", Student.location);
console.log("Year :", Student.Year);

Student.CGPA = 8.9;
console.log("Updated_CGPA :", Student.CGPA);


//2. Employee Management
// Add Property and Delete Property

let employee = {
    name: "Muthu",
    department: "IT",
    salary: 25000
};

employee.city = "Coimbatore";
console.log(employee);
delete employee.department;
console.log(employee);


//3. User Profile Checker
//Check Property Exists concept used

let user = {
    username: "kalai",
    email: "kalai@gmail.com"
};

console.log("email" in user);
console.log("phone" in user);


//4.Product Details
//for...in and Iteration concept used

let product = {
    name: "Laptop",
    price: 50000,
    stock: 10
};

for (let key in product) {
    console.log(key + " : " + product[key]);
}


//5.Employee Database
// Object.keys() and Object Length concept used

let employeeDB = {
    id: 101,
    name: "Kalai",
    department: "IT",
    salary: 30000
};

console.log("Total Properties:", Object.keys(employeeDB).length);


//6.Product Details — Object.values()

let product2 = {
    name: "Phone",
    price: 20000,
    brand: "Samsung"
};

console.log(Object.values(product2));


//7.Array of Objects — Student Marks List

let students = [
    { name: "Kalai", marks: 85 },
    { name: "Selvi", marks: 90 },
    { name: "Muthu", marks: 78 }
];

students.forEach(student => {
    console.log(student.name + " scored " + student.marks);
});

// Toppers above 80
let toppers = students.filter(student => student.marks > 80);
console.log("Toppers:", toppers);