

// This will print "Hello World" in the console.
console.log("Hello World");


// Arithmetic Operators:
// let a = 5;
// let b = 8;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);


//unary Operator 

// let a = 5;
// let b = 2;

// console.log("a =", a, "b =", b);

// a++;
// a--;

// console.log("++a =", ++a); // Pre Increment
// console.log("--a =", --a); // Pre Decrement

// console.log("a++ =", a++); // Post Increment
// console.log("a-- =", a--); // Post Decrement


//Assignment Operator


let a = 5;
let b = 2;

a += 4; // a = a + 4
console.log("a = ", a); // 9

a -= 4; // a = a - 4
console.log("a = ", a); // 5

a *= 4; // a = a * 4
console.log("a = ", a); // 20

a /= 4; // a = a / 4
console.log("a = ", a); // 5

a %= 4; // a = a % 4
console.log("a = ", a); // 1

a **= 4; // a = a ** 4
console.log("a = ", a); // 625

//Comparison Operators

// let a = 5;
// let b = 2;

// console.log("5 != 2", 5 != 2);
// console.log("a==b", a==b);
// console.log("a === b", a === b);
// console.log("5 > 2", a > b);


//Logical Operator

// let a = 6;
// let b = 3;

// let cond1 = a > b; // true
// let cond2 = a === b; // false 

// console.log("cond1 && cond2 ", cond1 && cond2); // false
// console.log("cond1 || cond2 ", cond1 || cond2); // true
// console.log("! cond1 ", !cond1); // false

//Conditional 

// let age = 18;

// if (age >= 18) {
//     console.log("You are an adult");
// }


// let age = 25;

// if(age > 18) {
//     console.log("Can vote");
// } else {
//     console.log("Can't vote");
// }



// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// }

// if(mode === "light"){
//     color = "white";
// }

// console.log(color);



// let mode = "light";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else {
//     color = "white";
// }

// console.log(color);

// let age = 25;

// if (age >= 18){
//     console.log("Adult: You can vote");
// } else {
//     console.log("Not Adult: You can't vote");
// }


//odd or even 

// let num = 101;

// if (num % 2 === 0) {
//     console.log(num, " this is even number");
// } else {
//     console.log(num, " this is odd number");
// }


// let mode = "pink";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else if (mode === "blue") {
//     color = "blue";
// } else if (mode === "pink") {
//     color = "pink";
// } else {
//     color = "white";
// }

// console.log(color);


//Ternary Operator 

let age =25;

let result = age >= 18 ? "Adult" : "Not Adult";

console.log(result);






let score;
let grade;
score = prompt("Enter your score");

if (score <= 100 && score >= 90) {
    grade = "A";
} else if (score <= 89 && score >= 80) {
    grade = "B";
} else if (score <= 79 && score >= 70) {
    grade = "C";
} else if (score <= 69 && score >= 60) {
    grade = "D";
} else if (score <= 59 && score >= 50) {
    grade = "E";
} else if (score <= 49 && score >= 0) {
    grade = "F";
}

console.log(" your score is ", score, " your grade is ", grade);
