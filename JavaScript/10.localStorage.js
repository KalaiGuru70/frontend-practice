// Program 1: Save and Get User Name


// LocalStorage Definition:
// LocalStorage is used to store data in the browser permanently.
// The data remains even after refreshing the page.

// Program Definition:
// This program stores a user's name in LocalStorage
// and then retrieves and displays it.

// Store data
localStorage.setItem("name", "Kalai");

// Get data
let name = localStorage.getItem("name");

// Display data
console.log("Saved Name:", name);

/*

Sample Output:

Saved Name: Kalai

*/


// Program 2: Remove Data

// LocalStorage Definition:
// removeItem() removes a specific item from LocalStorage.

// Program Definition:
// This program stores a name, removes it,
// and checks whether it still exists.

// Store data
localStorage.setItem("name", "Kalai");

// Remove data
localStorage.removeItem("name");

// Check data
console.log(localStorage.getItem("name"));

/*

Sample Output:

null

*/


// Program 3: Clear LocalStorage

// LocalStorage Definition:
// clear() removes all data from LocalStorage.

// Program Definition:
// This program stores two values,
// clears all LocalStorage data,
// and checks whether the values exist.

// Store data
localStorage.setItem("name", "Kalai");
localStorage.setItem("city", "Theni");

// Clear all data
localStorage.clear();

// Check data
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("city"));

/*

Sample Output:

null
null

*/



// Program 4: Convert Object to JSON String
// Using JSON.stringify()

// JSON.stringify() Definition:
// JSON.stringify() converts a JavaScript object
// into a JSON string.

// Program Definition:
// This program converts a JavaScript object into
// a JSON string and stores it in LocalStorage.

// Create an object
let student = {
    name: "Kalai",
    age: 21,
    department: "CSBS"
};

// Convert object to JSON string
let data = JSON.stringify(student);

// Store in LocalStorage
localStorage.setItem("student", data);

console.log("Student data saved");

/*

Sample Output:

Student data saved

*/


// Program 5: Convert JSON String to Object
// Using JSON.parse()

// JSON.parse() Definition:
// JSON.parse() converts a JSON string
// into a JavaScript object.

// Program Definition:
// This program retrieves a JSON string from
// LocalStorage, converts it into a JavaScript
// object, and displays the values.

// JSON String
let jsonData = '{"name":"Kalai","age":21,"department":"CSBS"}';

// Store JSON String
localStorage.setItem("jsonData", jsonData);

// Get JSON String and Convert to Object
let data = JSON.parse(localStorage.getItem("jsonData"));

// Display Object
console.log(data);

// Display Individual Values
console.log("Name:", data.name);
console.log("Age:", data.age);
console.log("Department:", data.department);

/*

Sample Output:

{ name: 'Kalai', age: 21, department: 'CSBS' }

Name: Kalai
Age: 21
Department: CSBS

*/


// Program 6: Store Multiple Students

// Create an array of objects
let students = [
    { name: "Kalai", age: 21 },
    { name: "Guru", age: 20 },
    { name: "Kavi", age: 22 }
];

// Store array
localStorage.setItem("students", JSON.stringify(students));

// Get array
let data = JSON.parse(localStorage.getItem("students"));

// Display
console.log(data);

console.log("First Student:", data[0].name);
console.log("Second Student:", data[1].name);
console.log("Third Student:", data[2].name);

/*

Sample Output

[
  { name: 'Kalai', age: 21 },
  { name: 'Guru', age: 20 },
  { name: 'Kavi', age: 22 }
]

First Student: Kalai
Second Student: Guru
Third Student: Kavi

*/


// Program 7: Check Data Exists

// Get data
let name = localStorage.getItem("name");

// Check data
if (name) {
    console.log("Name:", name);
} else {
    console.log("No Data Found");
}

/*

Sample Output

Name: Kalai

OR

No Data Found

*/