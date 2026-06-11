// Operators

//Arithmetic Operator 

//Shop Bill calculate

let price = 150;
let quantity =4;
let shipping = 50;
let subtotal = price * quantity;
let total = subtotal + shipping;

console.log(`Subtotal: ${subtotal}`);   
console.log(`Shipping: ${shipping}`);  
console.log(`Total: ${total}`);  

//Assignment Operators

// Wallet money add/subtract
let wallet = 1000;
console.log(`Starting: ${wallet}`);

wallet += 500;  // salary
console.log(`After salary: ${wallet}`);

wallet -= 200;  // grocery
console.log(`After grocery: ${wallet}`); 

wallet *= 2;    // doubled
console.log(`Doubled: ${wallet}`);       

wallet /= 4;    // split with friends
console.log(`After split: ${wallet}`);   


//Comparison Operator

//Movie ticket age Check

const UserAge = 16;
const minAge = 18;

console.log(UserAge >= minAge);    
console.log(UserAge == "16");      
console.log(UserAge === "16");     
console.log(UserAge != minAge);    
console.log(UserAge < minAge);     


//Logical Operator

// Job eligibility check

const age = 22;
const hasDegree = true;
const hasExperience = false;

// AND — both must be true
if(age>=18 && hasDegree ){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}

// OR One enough

if(hasDegree || hasExperience){
    console.log("Can Apply");
}
else{
    console.log("Cannot Apply");
}

//Not 
console.log(`Fresher: ${!hasExperience}`);


//String Operator

// Profile card
const firstName = "Kalai";
const lastName = "Selvi";
const city = "Tiruppur";
const job = "Frontend Developer";

// Concatenation
console.log(firstName + " " + lastName);

// Template literal
console.log(`Name: ${firstName} ${lastName}`);
console.log(`City: ${city}`);
console.log(`Job: ${job}`);
console.log(`Profile: ${firstName} | ${city} | ${job}`);

// Online store — free delivery check
const orderAmount = 450;
const delivery = orderAmount >= 500 ? "Free Delivery" : "Pay Rs.50 delivery";
console.log(delivery); 

// Exam result
const marks = 72;
const result = marks >= 50 ? "Pass " : "Fail ";
console.log(result); 

// Login check
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please login";
console.log(message);



