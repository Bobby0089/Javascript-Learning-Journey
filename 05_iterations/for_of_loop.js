// for of loop ->Used to iterate values of an iterable
//Give me each value.

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
const map = new Map();
map.set("IN","India");
map.set("US","USA");
map.set("AUS","Australia");
map.set("IN","India");

// console.log(map);
// for (const key of map) {
// console.log(key);
// }
for (const [key,value] of map) {
console.log(`${key} :- ${value}`);
}

