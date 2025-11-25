// CONDITIONAL STATEMENTS -----------------------------------------


// if statement
let age = 18;
if (age >= 18) {
console.log("You can vote");
}


// if-else statement
let age2 = 15;
if (age2 >= 18) {
console.log("You can vote");
} else {
console.log("You cannot vote");
}

//else-if statement
let marks = 101
if(marks > 0 && marks < 30){
    console.log("F");
}else if(marks > 31 && marks <=55){
    console.log("D");
}else if(marks > 56 && marks <=70){
    console.log("C");
}else if(marks > 71 && marks <=85){
    console.log("B");
}else if(marks > 86 && marks <=100){
    console.log("A+");
}else{
    console.log("Invalid marks");
    
}