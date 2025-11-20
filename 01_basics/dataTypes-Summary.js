// ----------------------------------------------
// JavaScript Data Types Summary (In Code Form)
// ----------------------------------------------

// ----------- 1. Primitive Data Types -----------

// String
let str = "Bobby";
console.log(typeof str); // "string"

// Number
let num = 123;
console.log(typeof num); // "number"

// Boolean
let isActive = true;
console.log(typeof isActive); // "boolean"

// Null
let emptyValue = null;
console.log(typeof emptyValue); // "object"  // historical JS bug

// Undefined
let notAssigned;
console.log(typeof notAssigned); // "undefined"

// BigInt
let bigNumber = 12345678901234567890n;
console.log(typeof bigNumber); // "bigint"

// Symbol
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // "symbol"



// ----------- 2. Non-Primitive (Reference) Types -----------

// Object
let obj = { name: "Bobby", age: 22 };
console.log(typeof obj); // "object"

// Array (special type of object)
let arr = [1, 2, 3];
console.log(typeof arr); // "object"

// Function (callable object)
function greet() {}
console.log(typeof greet); // "function"

// Date (object)
let today = new Date();
console.log(typeof today); // "object"

// Map (object)
let map = new Map();
console.log(typeof map); // "object"

// Set (object)
let set = new Set();
console.log(typeof set); // "object"


/*
JavaScript has 7 primitive types:
String, Number, Boolean, Null, Undefined, BigInt, Symbol

And non-primitive types (objects, arrays, functions, maps, sets, etc.)
*/

// typeof
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"  
console.log(typeof true);      // "boolean"
console.log(typeof 10);        // "number"
console.log(typeof "Bobby");   // "string"
console.log(typeof {});        // "object"
console.log(typeof []);        // "object"  (Array is also an object)
console.log(typeof function(){}); // "function"
