// Spread

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]


// Flat (Flatten nested arrays)

const another_array = [1, 2, 3, 4, [55, 66, 88, 99], 5, 6, [70, 98, [65, 56, 66]], 8]
console.log(another_array)
console.log(another_array.flat(Infinity))    // not a good approach
console.log(another_array.flat(2))           // this is good approach we should give proper depth 


// Array.isArray()

console.log("Is array?", Array.isArray(marvel_heros));
console.log("Is array?", Array.isArray("Bobby"));


// Array.from()

console.log("Array from string:", Array.from("Bobby"));
console.log("Array from set:", Array.from(new Set([1, 2, 2, 3])));


//Array.of()

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));