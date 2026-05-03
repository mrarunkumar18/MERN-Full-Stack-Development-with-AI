// Arrays Practice

let marks = [97, 82, 75, 64, 36];
console.log("Marks Array:", marks);
console.log("Length:", marks.length);

let heroes = ["ironman", "thor", "hulk", "spiderman", "batman"];

// Looping using for loop
console.log("Using For Loop:");
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

// Looping using for-of loop
console.log("Using For-of Loop:");
for (let hero of heroes) {
  console.log(hero.toUpperCase());
}

// Qs1. Find the average marks
let studentMarks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let val of studentMarks) {
  sum += val;
}

let avg = sum / studentMarks.length;
console.log(`Avg marks of the class = ${avg}`);

// Qs2. Apply 10% OFF to prices
let prices = [250, 645, 300, 900, 50];
console.log("Original Prices:", prices);

// Using for loop to modify the original array
for (let i = 0; i < prices.length; i++) {
  let offer = prices[i] / 10;
  prices[i] -= offer;
}

console.log("Final Prices (after 10% OFF):", prices);

// --- Array Methods ---
let foodItems = ["potato", "apple", "litchi", "tomato"];
console.log("\nFood Items:", foodItems);

foodItems.push("chips", "burger");
console.log("After Push:", foodItems);

let deletedItem = foodItems.pop();
console.log("After Pop:", foodItems, "| Deleted:", deletedItem);

console.log("As String:", foodItems.toString());

let marvel_heroes = ["thor", "spiderman", "ironman"];
let dc_heroes = ["superman", "batman"];
let heroes_combined = marvel_heroes.concat(dc_heroes);
console.log("Combined Heroes:", heroes_combined);

foodItems.unshift("mango");
console.log("After Unshift:", foodItems);

let shiftedItem = foodItems.shift();
console.log("After Shift:", foodItems, "| Shifted:", shiftedItem);

console.log("Slice (1, 3):", foodItems.slice(1, 3));

// Splice example
let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(startIdx, delCount, newEl...)
arr.splice(2, 2, 101, 102);
console.log("After Splice (2, 2, 101, 102):", arr);

// Add element using splice
arr.splice(2, 0, 103);
console.log("Add using splice:", arr);

// Delete element using splice
arr.splice(3, 1);
console.log("Delete using splice:", arr);

// Replace element using splice
arr.splice(3, 1, 104);
console.log("Replace using splice:", arr);

// Qs3. Companies Array Manipulation
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log("\nInitial Companies:", companies);

// a. Remove the first company
companies.shift();
console.log("After removing first (Bloomberg):", companies);

// b. Remove Uber & Add Ola in its place
// "Uber" is now at index 1 after the shift
companies.splice(1, 1, "Ola");
console.log("After replacing Uber with Ola:", companies);

// c. Add Amazon at the end
companies.push("Amazon");
console.log("After adding Amazon at end:", companies);
