// Strings 


// Creating Strings

// Using quotes (recommended)
let str1 = "Hello Bobby";
let str2 = 'JavaScript';
let str3 = `Template Literal`;

// Using String constructor (not recommended)
let str4 = new String("Hello");
console.log("str4 typeof:", typeof str4); // object



// String Properties

let name = "Bobby Gupta";
console.log("Length:", name.length); // 12



// Important String Methods 

// charAt(), charCodeAt()
let greet = "Hello";
console.log(greet.charAt(1));      // "e"
console.log(greet.charCodeAt(1));  // 101



// toUpperCase(), toLowerCase()
console.log("bobby".toUpperCase()); // "BOBBY"
console.log("BOBBY".toLowerCase()); // "bobby"



// trim(), trimStart(), trimEnd()
let spaced = "   Bobby   ";
console.log(spaced.trim());       // "Bobby"
console.log(spaced.trimStart());  // "Bobby   "
console.log(spaced.trimEnd());    // "   Bobby"



// slice(), substring()
let lang = "JavaScript";
console.log(lang.slice(0, 4));      // "Java"
console.log(lang.substring(4, 10)); // "Script"



// includes(), startsWith(), endsWith()
let text = "Hello Bobby";
console.log(text.includes("Bobby"));   // true
console.log(text.startsWith("Hello")); // true
console.log(text.endsWith("Bobby"));   // true



// indexOf(), lastIndexOf()
console.log(text.indexOf("o"));       // 4
console.log(text.lastIndexOf("o"));   // 7



// replace(), replaceAll()
let msg = "Hi Bobby, Bobby is learning JS";
console.log(msg.replace("Bobby", "rohit"));
// "Hi rohit, Bobby is learning JS"

console.log(msg.replaceAll("Bobby", "Akash"));
// "Hi Akash, Akash is learning JS"



// split()
let sentence = "I love JavaScript";
let words = sentence.split(" ");
console.log(words); // ["I", "love", "JavaScript"]



// concat()
let a = "Hello ";
let b = "Bobby";
console.log(a.concat(b)); // "Hello Bobby"



// Template Literals 

let username = "Bobby";
let age = 26;

let intro = `My name is ${username} and I am ${age} years old.`;
console.log(intro);


