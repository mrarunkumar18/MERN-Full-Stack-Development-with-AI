// console.log("Hello, Arun!");
// console.log("Hello, Arun!");
// console.log("Hello, Arun!");
// console.log("Hello, Arun!");
// console.log("Hello, Arun!");

//For Loop 

// Print 1 to 100
// for (let count =1; count <= 100; count ++) {
//     console.log("Hello, Golu!");
// }

// console.log("Loop has ended");


//Calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum = sum + i;
//     console.log(sum);
// }
// console.log("Final Sum =", sum); // 15 



//While Loop 


// let i = 1;
// while (i <=10) {
//     console.log("i=", i);
//     i++;
// }

// console.log("Loop has ended");


//Do While Loop 

// let i = 1;
//     do {
//         console.log("i=", i);
//         i++;
//     } while (i <=10);
    
//     console.log("Loop has ended");
    

//For-of Loop 

// let str = "JavaScript";

// let size = 0;
// for (let i of str) {
//     console.log("i= ", i);     //Print all characters of the string
//     size++;
// }
// console.log("Size =", size);


//for-in Loop

// let student = {
//     name : "Arun",
//     age : 22,
//     cgpa : 8.6,
//     isPass : true
// };

// for(let key in student) {
//     console.log("key=", key, "value:", student[key]);
// }



// PQ2



// let gameNumber = 25;

// let userNum = prompt("Guess the game number: ");

// while(userNum !== gameNumber) {
//        userNum = prompt("You entered the wrong number, Re-enter Please!!");
// }

// console.log("Congratulations, You entered the right number");


//Strings 

// let str = "Arun";
// let str2 = "Singh";

// console.log("length", str.length);        //4
// console.log("length", str2.length);        //5

// console.log("str", str);                    //Arun
// console.log("str2", str2);                  //Singh

// console.log(str[3]);                        //n


//Templates Literal


// let obj = {
//     item: "Pen",
//     price: 10
// };

// console.log("Item =", obj.item, "price =", obj.price);

// let output = `The cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

//

// let specialString = `this is a template literal`;
// console.log(specialString);

// console.log(`this is a special string`);

//

// let specialString = `this is a template literal ${1+2+3}`;
// console.log(specialString);

// 

// console.log(`this is a template \n literal ${1+2+3}`);

// console.log("This is Arun Singh \n second line ");

// console.log("This is Arun Singh \t second line ");




// String Methods 


let str = "  HelloArun Singh   ";
let str1 = "Golu";

console.log(str.toUpperCase());  //   HELLOARUN SINGH   

console.log(str.toLowerCase());  //   helloarun singh   

console.log(str.trim());  // HelloArun Singh

console.log(str.trimEnd());  //   HelloArun Singh

console.log(str.trimStart());  // HelloArun Singh   

console.log(str.slice(2, 8));  //  elloAr 

console.log(str.concat(str1)); //   HelloArun Singh    Golu 

console.log(str.replace("Hello", "Welcome")); //    WelcomeArun Singh   



