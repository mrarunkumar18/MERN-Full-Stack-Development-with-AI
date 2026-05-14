// let marks_student = 85;
// let marks_student_2 = 90;
// let marks_student_3 = 95;

// console.log(marks_student, marks_student_2, marks_student_3);

// let marks = {
//     student_1 : 85,
//     student_2 : 90,
//     student_3 : 95
// };                       // Object not Array [BRACES]

// let marks_arr = [85, 90, 95]; // Array [Square Brackets]

// console.log(marks_arr);              // [85, 90, 95]
// console.log(marks_arr[0]);           // 85 (Index starts from 0)
// console.log(marks_arr[1]);           // 90
// console.log(marks_arr[2]);           // 95
// console.log(marks_arr[3]);           // Undefined

// let marks = [97, 82, 78, 91];

// console.log(marks[0]);     //97
// console.log(marks[1]);     //82
// console.log(marks[2]);     //78
// console.log(marks[3]);     //91
// console.log(marks.length);  //4

// console.log(marks[4]);     // undefined

//

// let heros = ["shaktiman","spiderman","batman","heman"];

// console.log(heros);
// console.log(heros);
// console.log(heros.length);

//

// let heros = ["shaktiman", "Spiderman", "Thor", "Ironman", "Batman"];

// **For Loop**

// for(let idx = 0; idx < heros.length; idx++){
//     console.log(heros[idx], "\n");
// }

// **For of Loop**

// for (let hero of heros){
//     console.log(hero, "\n");
// }

//

// let cities = ["delhi", "kolkata", "mumbai", "surat"];

// for (let city of cities){
//     console.log(city, "\n");
// }

//

// ** Arrays Methods **

// push :

// let food_items = ["burger", "pizza", "pasta", "sushi", "salad", "noodles", "ramen"];

// food_items.push("chai","vadapav");  // Adds to the end of the array

// console.log(food_items.length);
// console.log(food_items);

// pop :

// let food = ["burger", "pizza", "pasta", "sushi", "salad", "noodles", "ramen"];

// console.log(food);

// // food.pop();                                  // Removes the last element of the array
// let delatedItems = food.pop();
// console.log(delatedItems);                   // Returns the deleted item
// console.log(food);                          // Array after deletion




// toString()

// let food = [ "apple" , "banana" , "mango" , "orange"];
// console.log(food);                    // [ 'apple', 'banana', 'mango', 'orange' ]
// console.log(food.toString());         // apple,banana,mango,orange
// console.log(typeof food);             // object




//concat()

// let heros = [ "Thore", "Ironman", "Hulk"];
// let villains = [ "Loki", "Thanos", "Ultron" ];

// let heros_villains = heros.concat(villains);    // Combines two or more arrays.
// console.log(heros_villains);




// unshift()

// let heros = [ "Thore", "Ironman", "Hulk"];

// heros.unshift("Shaktiman","Spiderman"); // Adds to the beginning of the array

// console.log(heros);




// shift()

// let hero = [ "Thore", "Ironman", "Hulk"];

// // hero.shift();  // Removes the first element of the array
// // console.log(hero);

// let deletedItems = hero.shift();
// console.log(deletedItems);
// console.log(hero);



// slice()

// let heros = [ "Thore", "Ironman", "Hulk","Spiderman","Batman","Shaktiman","Heman"];

// console.log(heros);

// // heros.slice(1,3);   // returns a piece of an array (end index is exclusive)
// console.log(heros.slice(2,5));





// splice(start, deleteCount, item1, item2, ...);


let arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.splice(1, 3, 99, 88, 77); // adds 7 and 8 at index 2 and removes 3 elements starting from index 2
console.log(arr);


