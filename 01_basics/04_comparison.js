//1. BASIC COMPARISONS

console.log("5 < 10 =", 5 < 10);
console.log("20 > 10 =", 20 > 10);
console.log("7 <= 7 =", 7 <= 7);
console.log("15 >= 5 =", 15 >= 5);

// 2. null & undefined
console.log("null > 0 =", null > 0);
console.log("null == 0 =", null == 0);
console.log("null <= 0 =", null <= 0);

console.log("undefined == 0 =", undefined == 0);
console.log("undefined > 0 =", undefined > 0);
console.log("undefined < 0 =", undefined < 0);

// 3. NaN comparisons
console.log("NaN == NaN =", NaN == NaN);
console.log("NaN === NaN =", NaN === NaN);
console.log("NaN != NaN =", NaN != NaN);
console.log("Number.isNaN(NaN) =", Number.isNaN(NaN));

// 4. STRICT EQUALITY (===)
console.log("5 === '5' =", 5 === "5");
console.log("0 === false =", 0 === false);
console.log("null === undefined =", null === undefined);


// 5. TYPE COERCION PRIORITY
console.log("'5' - 2 =", "5" - 2);
console.log("'5' + 2 =", "5" + 2);
console.log("true == '1' =", true == "1");
console.log("false == '0' =", false == "0");