/*  REDUCE()

reduce() is used to take an array and reduce it to a single value.

Examples of single value:
sum
product
total price
maximum
minimum
object
*/

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

// let nums = [5, 10, 2, 25, 8];

// let max = nums.reduce((acc, curr) => {
//     console.log(`acc: ${acc} and currval: ${curr}`);
//     return curr > acc ? curr : acc;
// }, nums[0]);

// console.log(max);  // 25


let nested = [[1,2], [3,4], [5,6]];

let flat = nested.reduce((acc, curr) => {
    // console.log(`acc: ${acc} and currval: ${curr}`);
    return acc.concat(curr)
}, []);

// console.log(flat);   // [1,2,3,4,5,6]

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const cartTotal = shoppingCart.reduce( (acc, curr) => {
        console.log(`acc: ${acc} and currval: ${curr}`);
        return acc + curr.price
},0)

console.log(cartTotal);
