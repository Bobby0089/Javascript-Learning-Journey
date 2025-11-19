// Variable declarations
const accountId = 123345;
let accountEmail = "Bobby@google.com";
var accountPassword = "123456789";

let accountCity = "Jaipur";
let accountState; // declared but not assigned → undefined

// Re-assigning values
// accountId = 123544; // Not allowed (const cannot be changed)

accountEmail = "Bobby123@gmail.com";
accountPassword = "987654321";
accountCity = "Mumbai";

// Output values in table format
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* 
Notes:
1. If a variable is declared but no value is assigned, JS sets it as undefined.
2. Avoid using 'var' because it is function-scoped and may cause issues in block scope.
3. Always use let or const for safer code.
*/
