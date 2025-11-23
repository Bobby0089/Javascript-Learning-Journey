// Dates

// Current date & time
const now = new Date();
console.log("Current Date & Time:", now);

// Create date using (year, month, day)
// Note: month starts from 0 → (0 = Jan, 11 = Dec)
const customDate = new Date(2025, 0, 15);
console.log("Custom Date:", customDate);

// Create date with full details (year, month, day, hr, min, sec)
const customDateTime = new Date(2025, 10, 22, 14, 30, 45);
console.log("Custom Date & Time:", customDateTime);

// Create date using string
const fromString = new Date("2024-12-31");
console.log("Date from string:", fromString);

console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth());
console.log("Date (1-31):", now.getDate());
console.log("Day of week (0-6):", now.getDay()); // 0 = Sunday
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());
console.log("Timestamp:", now.getTime());  // millis since Jan 1 1970


console.log("toString():", now.toString());
console.log("toDateString():", now.toDateString());
console.log("toTimeString():", now.toTimeString());
console.log("toLocaleString():", now.toLocaleString());
console.log("toLocaleDateString():", now.toLocaleDateString());
console.log("toLocaleTimeString():", now.toLocaleTimeString());


const timestamp = Date.now();
console.log("Current Timestamp:", timestamp);

console.log("Convert timestamp to seconds:", Math.floor(timestamp / 1000));