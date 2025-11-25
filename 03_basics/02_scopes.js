// global scope -> Variables declared outside any block/function

let num1 = 10
const num2 = 20
var num3 = 30

let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar);
}

showGlobal();
console.log("From global:", globalVar);

//-----------------------------------------------------------------
//Block scope -> 
{
    let x = 20;
    const y = 30;
    console.log("Inside block:", x, y);
}

// console.log(x); 
// console.log(y); 

{
    var num = 99;    //var → NOT block scoped (ONLY function scoped)
}

console.log("var is NOT block scoped:", num); // var escapes block


//-----------------------------------------------------------------
// NEsted scope -> JS searches variables from inner → outer → global

let p = 5;

function level1() {
    let q = 10;

    function level2() {
        let r = 20;
        console.log(p, q, r); // JS finds all using scope chain
    }
    //console.log(r)
    level2();
}
//console.log(q)
level1();
//level2();
