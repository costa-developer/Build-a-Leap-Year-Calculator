---

# 📆 Leap Year Calculator

This is a simple JavaScript project that determines whether a given year is a **leap year** or not based on standard leap year rules.

## ✅ How Leap Years Work

A year is a leap year if:

* It is divisible by **4**, **and**
* Not divisible by **100**, **unless**
* It is also divisible by **400**

### Examples:

* ✅ 2024 → Leap year ✅
* ❌ 1900 → Not a leap year ❌
* ✅ 2000 → Leap year ✅

---

## 📌 Features

* Checks whether a given year is a leap year
* Returns a message in the format:
  `"[year] is a leap year."` or `"[year] is not a leap year."`
* Uses `if/else` statements for logic
* Easy to test and modify

---

## 🛠️ Usage

1. Clone or download the repo.
2. Open the JavaScript file.
3. Set the value of the `year` variable to the year you want to check.
4. Run the script using a browser console or Node.js.

```bash
node leapYearCalculator.js
```

---

## 🧪 Example

```javascript
let year = 2024;

function isLeapYear(y) {
  if ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) {
    return `${y} is a leap year.`;
  } else {
    return `${y} is not a leap year.`;
  }
}

let result = isLeapYear(year);
console.log(result);
```

---

## 📄 License

This project is free to use for learning and educational purposes.

---
