// JavaScript Arrays Practice

// 1. Array Creation
let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];
let marks = [96, 75, 48, 83, 66];
let info = ["rahul", 86, "Delhi"]; // Storing multiple types

console.log("Heroes:", heroes);
console.log("Length of heroes:", heroes.length);

// 2. Indexing
console.log("First hero:", heroes[0]);
heroes[0] = "ironman (tony)"; // Arrays are mutable
console.log("Updated heroes:", heroes);

// 3. Looping over Arrays
console.log("--- Looping using for loop ---");
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.log("--- Looping using for-of loop ---");
for (let hero of heroes) {
  console.log(hero.toUpperCase());
}

console.log("--- Looping using forEach loop ---");
heroes.forEach((hero, idx) => {
  console.log(`Hero at index ${idx} is ${hero}`);
});

// 4. Array Methods
let foodItems = ["potato", "apple", "litchi", "tomato"];
console.log("Original Food:", foodItems);

foodItems.push("chips", "burger", "paneer"); // Add to end
console.log("After Push:", foodItems);

let deletedItem = foodItems.pop(); // Remove from end
console.log("After Pop:", foodItems);
console.log("Deleted item:", deletedItem);

console.log("To String:", foodItems.toString());

let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "batman"];
let indianHeroes = ["shaktiman", "krish"];

let allHeroes = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log("All Heroes (Concat):", allHeroes);

marvelHeroes.unshift("antman"); // Add to start
console.log("Marvel after unshift:", marvelHeroes);

let val = marvelHeroes.shift(); // Remove from start
console.log("Marvel after shift:", marvelHeroes, "Removed:", val);

// Slice and Splice
console.log("Slice (1,3):", allHeroes.slice(1, 3));

let arr = [1, 2, 3, 4, 5, 6, 7];
// splice(index, deleteCount, newElements...)
arr.splice(2, 2, 101, 102); 
console.log("After Splice:", arr);

// --- Practice Questions ---

/* 
PQ1: For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class.
*/
let classMarks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let mark of classMarks) {
  sum += mark;
}
let avg = sum / classMarks.length;
console.log(`Average marks of the class = ${avg}`);

/*
PQ2: For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
*/
let prices = [250, 645, 300, 900, 50];
console.log("Original Prices:", prices);

for (let i = 0; i < prices.length; i++) {
  let offer = prices[i] / 10;
  prices[i] -= offer;
}
console.log("Final Prices (10% OFF):", prices);

/*
PQ3: Create an array to store companies -> ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end
*/
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log("Original Companies:", companies);

// a. Remove first company
companies.shift();
console.log("After shifting:", companies);

// b. Remove Uber and Add Ola
// companies is now ["Microsoft", "Uber", "Google", "IBM", "Netflix"]
// Uber is at index 1
companies.splice(1, 1, "Ola");
console.log("After splice (Uber -> Ola):", companies);

// c. Add Amazon at end
companies.push("Amazon");
console.log("Final Companies:", companies);
