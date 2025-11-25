// -------------------------------------------------------
// this in Global Scope
// In browser → this = window(global object for browser is Window object)
// In Node.js → this = {} (empty object)

// console.log("Global this:", this);


// -------------------------------------------------------
// this Inside a Function 
// this → global object (window in browser)

function show() {
    console.log("Function this:", this);
}

// show();

function sample(){
    username = "Bobby"  // What happens here? we did NOT use var, let, or const. So JavaScript automatically creates a global variable:
    let name = "bobby"  //let username = "Bobby" creates a local variable.It belongs ONLY inside the function.It does NOT attach to this.
    console.log(this.username);
    console.log(this.name);
}
sample()

// -------------------------------------------------------
// Arrow Function 

// const greet = function(){            //Normal function
//     console.log(Hello);
    
// }
const greet = () => {            //Arrow function
    console.log(Hello);
    
}

const thisExample = () => {
    console.log(this);   //{}
    
}
thisExample()