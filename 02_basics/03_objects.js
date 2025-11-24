// Creating Object

const mySym = Symbol("key1")

const person = {
    name: "Bobby",
    "fullName": "Bobby Gupta",
    age: 26,
    location: "Maharashtra",
    email: "Bobby@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "wednesday"],
//  mySym : "KeyValue1",                Without brackets → "mySym" becomes a normal string key
    [mySym] : "Keyvalue1"            // With brackets → value of mySym is used as the key
}


// Accessing Object Properties

// console.log(person)


// console.log(person.name)  // Dot Notation
// console.log(person.fullName)
// console.log(person[mySym])  //Bracket notation
// console.log(typeof person[mySym])  //typeof checks the value, not the key type.
// console.log(person["email"])


// Updating Properties

person.email = "bobby@yahoo.com"
// console.log("After update : " , person.email);

// Adding Properties

person.city = "Mumbai"
// console.log("Added new propertie City : ", person);

// Deleting Properties

delete person.city
// console.log("After deleting property : ", person);

// Checking If Property Exists

// console.log("Has name?", "name" in person);
// console.log("Has salary?", person.hasOwnProperty("salary"));

//Adding Function in object

person.greeting = function(){
    console.log("Hello user ");
    
}
//person.greeting → refers to the function itselfThis does NOT run the function.It simply prints:the function definition
console.log(person.greeting); 

//person.greeting() → executes the function
console.log(person.greeting());
/* Why undefined after "Hello user"?
The function prints "Hello user" (using console.log)
But the function does not return anything, so it returns undefined
*/

