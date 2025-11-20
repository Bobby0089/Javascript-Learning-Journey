//Primitive Data Types

let numberValue = 123456;
let bigIntValue = 1234567890123456789012345n;  
let stringValue = "Bobby";
let booleanValue = true;
let undefinedValue;                                  
let nullValue = null;                              
let symbolValue = Symbol("unique");


// Non-Primitive Data Types

const objectValue = {
    name: "Bobby",
    age: 26
};                                                   // Object

const arrayValue = ["Java", "JS", "Spring Boot"];    // Array

function greet() {                                   // Function
    return "Hello Bobby!";
}


// Output using console.table()
console.table([
    { Type: "Number", Value: numberValue },
    { Type: "BigInt", Value: bigIntValue.toString() },
    { Type: "String", Value: stringValue },
    { Type: "Boolean", Value: booleanValue },
    { Type: "Undefined", Value: undefinedValue },
    { Type: "Null", Value: nullValue },
    { Type: "Symbol", Value: symbolValue.toString() },
    { Type: "Object", Value: JSON.stringify(objectValue) },
    { Type: "Object", Value: objectValue },
    { Type: "Array", Value: arrayValue.join(", ") },
    { Type: "Array", Value: arrayValue },
    { Type: "Function", Value: greet() }
]);

/*
Notes:
1. Primitive types: Number, BigInt, String, Boolean, Undefined, Null, Symbol.
2. Non-primitive types: Object, Array, Function.
3. Symbol always returns a unique value.
*/