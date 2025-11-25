/*
 What is a Function?
  A function is a block of code designed to perform a task.
  It runs only when you call it.
*/

// Creating a function

function greet() {
    console.log("Hello");
}

// greet         //this is function reference
greet();        // calling the function


//-----------------------------------
// Function Parameters & Arguments

function addNumbers(num1, num2){   // num1 and num2 are Parameters
    console.log("sum : ", num1+num2);
}
addNumbers(10,6)                   // 10 and 6 are arguments


//-----------------------------------
// Function with return value

function multiply(num1, num2){   
    return num1*num2;               // return sends value back to caller
}
const result = multiply(10,6)        
// console.log("result : ", result);

//-----------------------------------
// Default parameter

function welcome(user = "Guest") {
    console.log("Welcome,", user);
}

// welcome("Bobby");
// welcome(); // uses default


//-----------------------------------
// Rest Parameters (...)
// Used when number of arguments is unknown

function calculateCartPrice(...num){
    return num
}

console.log(calculateCartPrice(100,200,300,555,454));

//------------------------------------
// pasing objects and array in function

const user = {
    username : "Rohit",
    price : 5000
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Akash",
    price : 10000
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

// -------------------------------------------------------
// Function Expression
// Functions stored inside variables

const sayHi = function() {
    console.log("Hi!");
};

sayHi();

// -------------------------------------------------------
// Function Hoisting/
// Function declarations are hoisted
// You can call them before defining

sayHello();

function sayHello() {
    console.log("Hello!");
}


// -------------------------------------------------------
// Function Not Hoisted (Expression)

// sayBye(); // ERROR: cannot call before initialization

const sayBye = function() {
    console.log("Bye!");
};