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

let student = {
    name : "Arun",
    age : 22,
    cgpa : 8.6,
    isPass : true
};

for(let key in student) {
    console.log("key=", key, "value:", student[key]);
}



// PQ2



let gameNumber = 25;

let userNum = prompt("Guess the game number: ");

while(userNum !== gameNumber) {
       userNum = prompt("You entered the wrong number, Re-enter Please!!");
}

console.log("Congratulations, You entered the right number");