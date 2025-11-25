// FOR EACH LOOP -> forEach() is an array method in JavaScript that runs a function once for every element in the array.

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (val) {
        // console.log(val);
        
})

coding.forEach( (item) => {
    console.log(item);
} )

//  coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})