const score = 400
// console.log(score)

const num = new Number(1000)
// console.log(num)

// console.log(num.toString().length);
// console.log(num.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(5));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


//==================Maths========================

console.log(Math.PI);              // 3.141592653589793

// Math.round(), floor(), ceil(), trunc()
console.log(Math.round(4.6));      // 5
console.log(Math.round(4.4));      // 4
console.log(Math.floor(4.9));      // 4
console.log(Math.ceil(4.1));       // 5
console.log(Math.trunc(4.8));      // 4 (removes decimal)

// Math.abs(), pow(), sqrt()
console.log(Math.abs(-50));        // 50   negative to positive -> Yes
console.log(Math.abs(50));         // 50   positive to negative -> No
console.log(Math.pow(2, 3));       // 8
console.log(Math.sqrt(81));        // 9

// Math.min(), max()
console.log(Math.min(10, 5, 30));  // 5
console.log(Math.max(10, 5, 30));  // 30

// Math.random() → always between 0 and 1
console.log(Math.random());

// Random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.trunc(Math.random()*(max-min +1) + min))

console.log(Math.trunc(Math.random()*6)+1)