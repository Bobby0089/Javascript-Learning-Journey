/*
    TRUTHY VALUE

"0"         // string containing zero
"false"     // string containing word 'false'
" "         // string with space
[]          // empty array
{}          // empty object
function(){} // empty function
*/

if ("0") {
  console.log("This will run, because '0' is truthy");
}


/*
    FALSY VALUE

false       // boolean false
0           // zero
-0          // negative zero
0n          // BigInt zero
""          // empty string
null        // no value
undefined   // variable declared but not assigned
NaN         // Not a Number

*/

if (0) {
  console.log("This won't run");
} else {
  console.log("0 is falsy");
}

/*
    Nullish Coalescing Operator? (??)
    The ?? operator returns the right-hand value ONLY when the left-hand value is null or undefined.
    let result = value1 ?? value2;
    Meaning:
    If value1 is null or undefined → return value2
    Otherwise → return value1
*/

let age = 10;

let age2 = null ?? age;
let age3 = age ?? undefined;
let age4 = 0 ?? age;
console.log(age2);
console.log(age3);
console.log(age4);


// TERNARY OPERATOR

//condition ? valueiftrue : valueiffalse

let isLoggedIn = false

let status = isLoggedIn ? "Welcome back" : "Please login";
console.log(status);
