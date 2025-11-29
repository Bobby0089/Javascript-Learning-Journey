//  1.

// how to create a promise
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("Async task completed")
        //  resolve()
    },2000)
   
})

// After creating a promise we have to consume it
promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

/*
we have created a new Promise.
A promise always needs a function inside it.
That function gets two tools:
resolve() → tell JavaScript: "Success! Work is done"
reject() → tell JavaScript: "Something went wrong"

Then call resolve() to finish the promise successfully

then() runs only when resolve() is called.Consuming the Promise

*/


// 2. 

new Promise(function(resolve,reject){
    setTimeout(() => {
        // console.log("Async task 2");
        // resolve()
    }, 2000);
})

.then(function(){
    console.log("Async 2 resolved");
    
})

// 3. 

const promiseThree = new Promise(function(resolve,rejesct){
    setTimeout(function(){
        // resolve({username: "Bobby", email: "bobby@example.com"})  // we can pass data as a parameter in resolve
    },1000)
})
//WHY do we pass data inside resolve().Because .then() can only receive the data that you send through resolve().
//You can put anything in the box:stringnumberobjectarraybooleaneven another function!
//When the promise finishes, that box is delivered to .then().
promiseThree.then(function(user){
    // console.log(user);
    
})

// 4.

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error)
        {
            resolve({username: "Bobby", password: "1234"})
        }else{
            console.log("ERROR : Something went wrong");
            
        }
    },1000)
})

promiseFour
.then( (user) => {
    console.log(user);   // prints the whole object
    return user.username    // returns only the username
})
.then( (username) => {    //Second .then() receives what the first .then() returns
    console.log(username);
})
.catch( (error) => {    //If anything goes wrong in:the original promise Then .catch() will run
    console.log(error);
})
.finally( () => console.log("The promise is either resolved or rejected"))

// 5. 

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);
    
})
.catch( (error) => {
    console.log(error);
    
})