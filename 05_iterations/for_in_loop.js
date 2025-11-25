//  FORIN LOOP ->Used to iterate keys (property names) of an object.
// Give me each key.”

const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "Ruby"
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
    
}

const nums = [1, 2 ,3, 4, 5, 6, 7, 8, 9];
for (const key in nums) {
    console.log(nums);    // key = index of array
    console.log(nums[key]);  // nums[key] = array values
}