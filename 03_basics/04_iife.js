// -------------------------------------------------------
// Immediately Invoked Function Expression (IIFE)
// Executes immediately

function dbConnection(){
    console.log("Connection established success");
    
}
// dbConnection()  
/*
Without a semicolon, JavaScript thinks we are doing this:
dbConnection()(function dbConnection2(){})
Meaning:
“Call dbConnection() and then use its return value as a function to call the IIFE.”
But dbConnection() returns nothing, so you get:


js thinks we are doing this: 
function outer() {
    return function inner() {
        console.log("Inner called!");
    }
}

outer()();  // works!

but
function dbConnection(){
    console.log("Connection established success");
}  doesn't return anything
*/
dbConnection();

(function dbConnection2(){
    console.log("Second connection established success");
    
})();


((name) => {
    console.log(`hello ${name}`)
})("Bobby");