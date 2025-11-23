//  ARRAYS    


// Creating Arrays

const arr1 = [1, 2, 3, 4, 5];
console.log("Array 1:", arr1);

const arr2 = ["Apple", "Mango", "Banana"];
console.log("Array 2:", arr2);

// Array using constructor
const arr3 = new Array(10, 20, 30);
console.log("Array 3:", arr3);


// Accessing & Modifying Elements

console.log("First element:", arr1[0]);
console.log("Last element:", arr1[arr1.length - 1]);

arr1[2] = 99;
console.log("After modification:", arr1);


// Array Properties

console.log("Length:", arr2.length);


// Array Methods 

// 1. push() → Add item at end
arr2.push("Orange");
console.log("After push:", arr2);

// 2. pop() → Remove item from end
arr2.pop();
console.log("After pop:", arr2);

// 3. unshift() → Add item at start
arr2.unshift("Papaya");
console.log("After unshift:", arr2);

// 4. shift() → Remove item from start
arr2.shift();
console.log("After shift:", arr2);

// 5. includes() → Check if value exists
console.log("Has Mango?", arr2.includes("Mango"));

// 6. indexOf() → Find index of element
console.log("Index of Mango:", arr2.indexOf("Mango"));

// 7. join() → Convert array to string
console.log("Joined:", arr2.join(" - "));


// Slice vs Splice

// slice(start, end) → Does NOT change original
const a = [1, 2, 3, 4, 5];
const sliced = a.slice(1, 4);
console.log("Original array:", a);
console.log("Sliced (1-4):", sliced);

// splice(start, deleteCount, item...) → Changes original
const b = [1, 2, 3, 4, 5];
const spliced = b.splice(2, 2, 99, 100);
console.log("After splice:", b);
console.log("Removed items:", spliced);
