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
console.log("result : ", result);

//-----------------------------------
// Default parameter

function welcome(user = "Guest") {
    console.log("Welcome,", user);
}

welcome("Bobby");
welcome(); // uses default