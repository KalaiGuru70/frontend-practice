
// Program 1: Callback Function Example

// Callback Definition:
// A callback is a function passed as an argument to another function.
// It is executed after a task is completed.

// Program Definition:
// This program demonstrates how a callback function
// receives and displays data after an asynchronous task is completed.

// Function with callback
function fetchData(callback) {

    // Wait for 2 seconds (Simulating an asynchronous task)
    setTimeout(() => {

        // Sample data
        const data = { name: "Kalai", age: 21 };

        // Execute the callback function and pass the data
        callback(data);

    }, 2000);

}

// Call the function
fetchData((data) => {

    // Display the received data
    console.log("Data received:", data);

});
/*
Sample Output (After 2 Seconds):

Data received: { name: 'Kalai', age: 21 }

*/



// Program 2: Promise Example

// Promise Definition:
// A Promise is an object that represents the result of an
// asynchronous operation. It can be Pending, Fulfilled, or Rejected.

// Program Definition:
// This program demonstrates how a Promise handles
// success using resolve() and failure using reject().

// Create a Promise
const myPromise = new Promise((resolve, reject) => {

    // Success condition
    const success = true;

    if (success) {

        // Resolve the Promise
        resolve("Data ready!");

    } else {

        // Reject the Promise
        reject("Something went wrong!");

    }

});

// Handle Success
myPromise
    .then(data => console.log(data))

    // Handle Error
    .catch(error => console.log(error));

/*
Sample Output (Success):
Data ready! 

OR

Sample Output (Failure):
Something went wrong! 

*/

// Program 3: Async/Await Example

// Async/Await Definition:
// Async/Await is a modern way to handle asynchronous operations.
// async makes a function asynchronous, and await waits for a Promise to complete.

// Program Definition:
// This program demonstrates how async/await waits
// for a Promise and then prints the result.

// Create an async function
async function getData() {

    // Wait for the Promise
    let data = await new Promise((resolve) => {

        // Delay for 3 seconds
        setTimeout(() => {

            // Return the data
            resolve("Data Ready");

        }, 3000);

    });

    // Print the result
    console.log(data);
}

// Call the function
getData();

/*
Sample Output (After 3 Seconds):

Data Ready

*/


// Program 4: Fetch API Example

// Fetch API Definition:
// The Fetch API is used to get data from a server or the internet.
// It returns a Promise.

// Program Definition:
// This program fetches a random joke from an online API
// and displays the joke and its answer.

// Create an async function
const getJoke = async () => {

    // Fetch data from the API
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");

    // Convert the response into JSON format
    const data = await response.json();

    // Print the joke
    console.log("Joke:", data.setup);

    // Print the answer
    console.log("Answer:", data.punchline);
}

// Call the function
getJoke();

/*
Sample Output:

Joke: Why don't scientists trust atoms?
Answer: Because they make up everything!

*/

// Program 5: JSON.stringify() and JSON.parse() Example

// JSON Definition:
// JSON (JavaScript Object Notation) is a lightweight format
// used to store and exchange data.

// Program Definition:
// This program converts a JavaScript object into a JSON string
// using JSON.stringify(), and then converts the JSON string
// back into a JavaScript object using JSON.parse().

// Create a JavaScript Object
const person = {
    name: "Kalai",
    age: 21
};

// Convert Object to JSON String
const jsonString = JSON.stringify(person);

// Print JSON String
console.log(jsonString);

// Print the Data Type
console.log(typeof jsonString);

// Convert JSON String back to Object
const backToObject = JSON.parse(jsonString);

// Print Object Value
console.log(backToObject.name);

// Print the Data Type
console.log(typeof backToObject);

/*
Sample Output:

{"name":"Kalai","age":21}
string
Kalai
object

*/

// Program 6: Try...Catch Error Handling Example

// Try...Catch Definition:
// try...catch is used to handle errors in JavaScript.
// The try block contains the code, and the catch block
// handles any errors that occur.

// Program Definition:
// This program tries to fetch data from an invalid URL.
// Since the URL is incorrect, an error occurs and is
// handled using the catch block.

// Create an async function
const getDataSafe = async () => {

    try {

        // Fetch data from an invalid URL
        const response = await fetch("https://wrong-url-example.com/api");

        // Convert response to JSON
        const data = await response.json();

        // Print the data
        console.log(data);

    } catch (error) {

        // Print the error message
        console.log("Error caught:", error.message);

    }
}

// Call the function
getDataSafe();

/*
Sample Output:

Error caught: fetch failed

*/


// Program 7: Loading State Example

// Loading State Definition:
// A loading state is used to inform the user that
// data is being loaded from a server or the internet.

// Program Definition:
// This program displays "Loading..." before fetching
// data from an API. If the data is fetched successfully,
// it displays "Done!" and prints the joke.
// If an error occurs, it displays the error message.

// Create an async function
const fetchWithLoading = async () => {

    // Display loading message
    console.log("Loading... ");

    try {

        // Fetch data from the API
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");

        // Convert the response into JSON format
        const data = await response.json();

        // Display success message
        console.log("Done! ");

        // Print the joke
        console.log(data.setup);

    } catch (error) {

        // Print the error message
        console.log("Error! ", error.message);

    }

}

// Call the function
fetchWithLoading();

/*

Sample Output (Success):

Loading... 
Done! 
Why don't scientists trust atoms?

OR

Sample Output (Error):

Loading... 
Error!  fetch failed

*/