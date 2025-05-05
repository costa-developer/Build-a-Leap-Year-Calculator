// 1. Declare a variable year and assign a value
let year = 2024;

// 2. Define the function isLeapYear
function isLeapYear(y) {
  // 3. Use if/else logic to check leap year rules
  if ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) {
    return `${y} is a leap year.`;
  } else {
    return `${y} is not a leap year.`;
  }
}

// 4. Call the function and store the result
let result = isLeapYear(year);

// 5. Output the result to the console
console.log(result);
