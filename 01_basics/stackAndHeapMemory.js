// ----------------------------------------------------
// Stack and Heap Memory in JavaScript (Code Example)
// ----------------------------------------------------

// ------------------- STACK EXAMPLES -------------------
// Stack stores: Number, String, Boolean, Null, Undefined, BigInt, Symbol
// Values are copied (pass-by-value)

// Primitive example (Stack)
let a = 10;
let b = a;        // b gets a COPY of a

console.log("a:", a); // 10
console.log("b:", b); // 10

a = 20;           // only 'a' changes

console.log("Updated a:", a); // 20
console.log("b after a changes:", b); // 10 (b is unchanged)



// ------------------- HEAP EXAMPLES -------------------
// Heap stores: Objects, Arrays, Functions
// Variables hold references (pointers) to heap memory

// Object example (Heap)
let obj1 = { name: "Bobby" };
let obj2 = obj1;        // obj2 receives REFERENCE to obj1

console.log("obj1:", obj1); // { name: "Bobby" }
console.log("obj2:", obj2); // { name: "Bobby" }

obj1.name = "Gupta";    // modify heap memory

console.log("Updated obj1:", obj1); // { name: "Gupta" }
console.log("obj2 after obj1 changes:", obj2); // { name: "Gupta" }



