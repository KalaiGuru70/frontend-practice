//function

//Understanding Example-Named function or Normal function
function greet(name){
    return "Hello" +" " +name;
}
console.log(greet("kalai"));

// Real program — Bill calculate
function calculateBill(price,quantity){
    return price*quantity;
}
console.log(calculateBill(120,3));

//Anonymous Function

//Understanding Example-No declare the name - but should be store the function in one variable;
let person = function(name){
    return "Hello" +" "+name;
}
console.log(person("Muthu"));

//Real program - calculate discount;
let calDiscount=function(price,percent){
    return (price*percent)/100;
}
console.log(calDiscount(1500,10));


//Function Expression

//Understanding Example-store the function in variable
let add = function(a,b){
    return a+b;
}
console.log(add(7,8));

// Real program — temperature convert
const celsiusToFahrenheit = function(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(37)); 

//Arrow function

//Understanding Example-short syntax
let multiply = (a,b) => a*b;
console.log(multiply(6,8));

//Real program 1 - Check Even or Odd
let evenOrOdd = num => num % 2==0 ? "Even" : "Odd"
console.log(evenOrOdd(8));
console.log(evenOrOdd(9));

//Real program 2 - find Biggest number
let bigNum = (a,b) => a > b ? a : b; 
console.log(bigNum(7,8));

//Real program 3 - find Biggest number with 3 num
let big = (a,b,c) => a > b && a > c ? "a is big :" + a :
                     b > a && b > c ? " b is big :" + b :
                     "c is big :" + c ;

console.log(big(4,7,2));
console.log(big(8,5,3));
console.log(big(10,4,18));

// Real program 4 — age check
const isAdult = (age) => age >= 18 ? "Adult" : "Minor";
console.log(isAdult(20)); // Adult
console.log(isAdult(15)); // Minor

//Nested function 

//Understanding example & function inside function
function outer(){
    
    function inner(){
        console.log("Hello");
    }
    inner();
}
outer();

//Real Example order summary

function orderSummary(price, quantity){
    function calculateTotal(){
        return price * quantity;
    }
    function applyDiscount(total){
        return total > 500 ? total -50 :  total;
    }
    const total = calculateTotal();
    const finalPrice = applyDiscount(total);
    return `Final Price: ${finalPrice}`;

}
console.log(orderSummary(1000,3));


