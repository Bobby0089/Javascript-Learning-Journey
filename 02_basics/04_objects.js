// how to make an object singleton and how to create with the help of constructor
//In JavaScript, objects created using object literals are already singletons.

const user = {
    name: "Bobby",
    age: 24
};

const newUser = new Object();

console.log(user);   // This is already a singleton

/*
Only one user object exists
You cannot duplicate it by calling new user()
Used everywhere with same reference
*/

//Non-singleton

class Car {
    constructor(model) {
        this.model = model;
    }
}

const c1 = new Car("BMW");
const c2 = new Car("Audi");

console.log(c1 === c2); // false


// Object.freeze() → Prevent changes

const settings = {
    theme: "dark",
    layout: "grid"
};

Object.freeze(settings);
settings.theme = "light";  // ignored
console.log("After freeze attempt:", settings);

// Object.seal() → Allow update, but can't add/remove props

const config = { mode: "auto", version: 1 };
Object.seal(config);

config.mode = "manual"; // allowed
config.newProp = "test"; // not allowed

console.log("After seal:", config);

// Nested Objects

const user1 = {
    id: 101,
    profile: {
        username: "BG",
        followers: 300
    }
};

console.log("Nested username:", user1.profile.username);


// Merging Objects

const obj1 = { a: 10, b: 20 };
const obj2 = { b: 30, c: 40 };

// const merge = {obj1,obj2}
// const merge = Object.assign({}, obj1, obj2)
const merged = { ...obj1, ...obj2 };

console.log("Merged object:", merged);


// Object.keys(), Object.values(), Object.entries()

const product = {
    id: 1,
    title: "Laptop",
    price: 60000
};

console.log("Keys:", Object.keys(product));
console.log("Values:", Object.values(product));
console.log("Entries:", Object.entries(product));

